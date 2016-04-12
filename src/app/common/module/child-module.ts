import {Module} from './module';

export class ChildModule extends Module {

    public constructor(parent: string, name: string, dependencies: string[]) {
        super(`${parent}.${name}`, dependencies);
    }
}
