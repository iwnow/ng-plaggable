import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'mod1',
    templateUrl: 'mod1.component.html',
    styleUrls: ['mod1.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Mod1Component {}