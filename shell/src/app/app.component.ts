import {
  Component, ComponentFactoryResolver,
  Injector,
  Type,
  ViewChild, ViewContainerRef,
  ɵcreateInjector as createInjector
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    readonly injector: Injector,
  ) { }

  @ViewChild('box', { read: ViewContainerRef })
  box!: ViewContainerRef;

  async load() {
    const modType: Type<any> = await this.getPluginModule();
    const inj = createInjector(modType, this.injector);
    const modInst = inj.get(modType);
    const factory = modInst.getComponentFactory();
    const factory2 = modInst.getComponentFactory2();
    
    this.box.clear();
    this.box.createComponent(factory);
    this.box.createComponent(factory2);
  }

  async getPluginModule() {
    const path = './assets/plugin.js';
    const ns = 'plugin';
    const moduleName = 'PluginModule';

    await import(/* webpackIgnore: true */ path);
    return (window as any).exports[ns][moduleName];
  }
}
