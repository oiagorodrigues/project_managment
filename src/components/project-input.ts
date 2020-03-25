import Component from './base-component';
import { Validatable, validate } from '../utils/validation';
import { autobind } from '../decorators/autobind';
import { projectState } from '../state/project-state';

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputEl: HTMLInputElement;
  descriptionInputEl: HTMLInputElement;
  peopleInputEl: HTMLInputElement;

  constructor() {
    super(true, 'app', 'project-input', 'user-input');
    this.titleInputEl = this.el.querySelector('#title') as HTMLInputElement;
    this.descriptionInputEl = this.el.querySelector( '#description' ) as HTMLInputElement;
    this.peopleInputEl = this.el.querySelector('#people') as HTMLInputElement;
    this.configure();
  }

  configure() {
    this.el.addEventListener('submit', this.submitForm);
  }

  renderContent() {}

  private getUserInput(): [string, string, number] | void {
    const { value: title } = this.titleInputEl;
    const { value: description } = this.descriptionInputEl;
    const { value: people } = this.peopleInputEl;

    const titleValidatable: Validatable = {
      value: title,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: description,
      required: true,
      minLength: 5,
    };
    const peopleValidatable: Validatable = {
      value: people,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert('Invalid input. Please, try again!');
      return;
    }

    return [title, description, +people];
  }

  @autobind
  private submitForm(evt: Event) {
    evt.preventDefault();
    const userInput = this.getUserInput();

    if (Array.isArray(userInput)) {
      projectState.addProject(...userInput);
      this.el.reset();
    }
  }
}
