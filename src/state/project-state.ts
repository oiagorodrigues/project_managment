import { Project, ProjectStatus } from "../models/project";

type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];
  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    return this.instance || new ProjectState()
  }

  addProject(title: string, description: string, people: number) {
    this.projects.push(new Project(
      Math.random().toString(),
      title,
      description,
      people,
      ProjectStatus.ACTIVE
    ));
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find(pj => pj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

export const projectState = ProjectState.getInstance();
