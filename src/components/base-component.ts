export default abstract class Component< P extends HTMLElement, E extends HTMLElement > {
  parentEl: P;
  templateEl: HTMLTemplateElement;
  el: E;

  constructor(
    insertAtStart: boolean,
    parentSelector: string,
    templateSelector: string,
    newElSelector?: string
  ) {
    this.parentEl = document.getElementById(parentSelector)! as P;
    this.templateEl = document.getElementById( templateSelector )! as HTMLTemplateElement;
    this.el = document.importNode(this.templateEl.content, true).firstElementChild as E;

    if (newElSelector) this.el.id = newElSelector;

    this.attach(insertAtStart);
  }

  private attach(insertAtStart: boolean) {
    this.parentEl.insertAdjacentElement( insertAtStart ? 'afterbegin' : 'beforeend', this.el );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}
