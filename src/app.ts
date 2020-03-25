import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

// TODO: Change layout to a better design
// TODO: Make the [Base Component]('./components/base-component.ts) class a **Decorator**
// TODO: Refactor the [validations]('./../src/utils/validation.ts')
// TODO: Make the [validation]('./../src/utils/validation.ts') utils a **Decorator**

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
