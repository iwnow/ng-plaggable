import { Injectable } from "@angular/core";
import { interval } from "rxjs";
import { shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CommonService {
    readonly counter$ = interval(1000).pipe(
        shareReplay({ bufferSize: 1, refCount: false }));
}