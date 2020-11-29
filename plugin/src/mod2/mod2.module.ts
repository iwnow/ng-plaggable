import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommonPluginModule } from "../common/common.module";
import { Mod2Component } from "./mod2.component";

@NgModule({
    imports: [
        CommonModule,
        CommonPluginModule
    ],
    declarations: [Mod2Component],
    exports: [Mod2Component]
})
export class Mod2Module {}