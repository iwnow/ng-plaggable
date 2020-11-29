import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonService } from "./common.service";

@Component({
    selector: 'common',
    templateUrl: 'common.component.html',
    styleUrls: ['common.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonComponent {
    constructor(
        readonly common: CommonService
    ) {}
}