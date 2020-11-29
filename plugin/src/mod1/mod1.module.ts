import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommonPluginModule } from "../common/common.module";
import { Mod1Component } from "./mod1.component";

@NgModule({
    imports: [
        CommonModule,
        CommonPluginModule
    ],
    declarations: [Mod1Component],
    exports: [Mod1Component]
})
export class Mod1Module {}