import Component from './base-component';
import { Draggable } from '../models/drag-drop';
import { Project } from '../models/project';
import { autobind } from '../decorators/autobind';

// ProjectItem Class
export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
  private project: Project;

  constructor(parentId: string, project: Project) {
    super(false, parentId, 'single-project', project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }
  
  get persons() {
    return this.project.people === 1 ? '1 person' : `${this.project.people} persons`
  }

  @autobind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move';
  }

  dragEndHandler(_: DragEvent) {
    console.log('DragEnd');
  }

  configure() {
    this.el.addEventListener('dragstart', this.dragStartHandler);
    this.el.addEventListener('dragend', this.dragEndHandler);
  }

  renderContent() {
    this.el.querySelector('h2')!.textContent = this.project.title;
    this.el.querySelector('h3')!.textContent = this.persons + ' assigned';
    this.el.querySelector('p')!.textContent = this.project.description;
  }
}
