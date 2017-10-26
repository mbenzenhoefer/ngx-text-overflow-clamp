import {
    Directive,
    ElementRef,
    Input,
    AfterViewInit
} from "@angular/core";

import * as clampLib from "text-overflow-clamp";

@Directive({selector: "[clamp]"})
export class TextOverflowClampDirective implements AfterViewInit {
    @Input("clamp") lines: number;

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit(): void {
        clampLib(this.el.nativeElement, this.lines);
    }
}
