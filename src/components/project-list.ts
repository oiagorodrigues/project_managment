import Component from "./base-component.js";
import { DragTarget } from "../models/drag-drop.js";
import { autobind } from "../decorators/autobind.js";
import { Project, ProjectStatus } from "../models/project.js";
import { projectState } from "../state/project-state.js";
import { ProjectItem } from './project-item.js';

export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
  assignedProjects: Project[] = [];

  constructor(private type: 'active' | 'finished') {
    super(false, 'app', 'project-list', `${type}-projects`);
    this.configure();
    this.renderContent();
  }

  @autobind
  dragOverHandler(evt: DragEvent) {
    if(evt.dataTransfer && evt.dataTransfer.types[0] === 'text/plain') {
      evt.preventDefault();
      const listEl = this.el.querySelector('ul')!;
      listEl.classList.add('droppable');
    }
  }

  @autobind
  dropHandler(evt: DragEvent) {
    const projectId = evt.dataTransfer!.getData('text/plain');
    projectState.moveProject(
      projectId,
      this.type === 'active' ? ProjectStatus.ACTIVE : ProjectStatus.FINISHED
    )
  }

  @autobind
  dragLeaveHandler(_: DragEvent) {
    const listEl = this.el.querySelector('ul')!;
    listEl.classList.remove('droppable');
  }

  configure() {
    this.el.addEventListener('dragover', this.dragOverHandler);
    this.el.addEventListener('dragleave', this.dragLeaveHandler);
    this.el.addEventListener('drop', this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter(prj => {
        if(this.type === 'active') return prj.status === ProjectStatus.ACTIVE
        return prj.status === ProjectStatus.FINISHED
      })

      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    this.el.querySelector('ul')!.id = `${this.type}-projects-list`;
    this.el.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
  }

  renderProjects() {
    const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
    listEl.innerHTML = '';
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.el.querySelector('ul')!.id, prjItem);
    }
  }
}
