export class Module {

  private ngModule: ng.IModule;

  public constructor(name: string, dependencies: string[]) {
    this.ngModule = angular.module(name, dependencies);
  }

  public get name(): string {
    return this.ngModule.name;
  }

  public component(name: string, component: ng.IComponentOptions): Module {
    this.ngModule.component(name, component);
    return this;
  }

  public directive(name: string, directive: ng.IDirectiveFactory): Module {
    this.ngModule.directive(name, directive);
    return this;
  }

  public provider(name: string, provider: ng.IServiceProviderClass): Module {
    this.ngModule.provider(name, provider);
    return this;
  }

  public factory(name: string, factory: Function): Module {
    this.ngModule.factory(name, factory);
    return this;
  }

  public service(name: string, service: Function): Module {
    this.ngModule.service(name, service);
    return this;
  }

  public config(config: Function): Module {
    this.ngModule.config(config);
    return this;
  }

  public run(run: Function): Module {
    this.ngModule.run(run);
    return this;
  }

  public value(name: string, value: any): Module {
    this.ngModule.value(name, value);
    return this;
  }
}
