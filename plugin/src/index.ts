import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { Mod1Component } from './mod1/mod1.component';
import { Mod1Module } from './mod1/mod1.module';
import { Mod2Component } from './mod2/mod2.component';
import { Mod2Module } from './mod2/mod2.module';

@NgModule({
    exports: [
        Mod1Module,
        Mod2Module,
    ],
})
export class PluginModule {
    constructor(readonly cfr: ComponentFactoryResolver) {}
    
    getComponentFactory() {
        return this.cfr.resolveComponentFactory(Mod1Component);
    }

    getComponentFactory2() {
        return this.cfr.resolveComponentFactory(Mod2Component);
    }
}