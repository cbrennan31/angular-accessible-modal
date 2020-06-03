import { Component, OnDestroy, EventEmitter, Input } from "@angular/core";

import { trigger, transition, style, animate } from "@angular/animations";

import { AccessibleModalService } from "../service/accessible-modal.service";

@Component({
  selector: "acm-accessible-modal",
  templateUrl: "./accessible-modal.component.html",
  styleUrls: ["./accessible-modal.component.css"],
  animations: [
    trigger("entranceTrigger", [
      transition(":enter", [
        style({
          opacity: "{{ initialOpacity }}",
          transform: "{{ initialYPosition }}",
        }),
        animate(
          "{{ entranceDuration }}",
          style({ opacity: 1, transform: "translateY(0)" })
        ),
      ]),
    ]),
    trigger("exitTrigger", [
      transition(":leave", [
        animate(
          "{{ exitDuration }}",
          style({
            opacity: "{{ exitOpacity }}",
            transform: "{{ exitYPosition }}",
          })
        ),
      ]),
    ]),
  ],
})
export class AccessibleModalComponent implements OnDestroy {
  @Input() overlayStyles: any;
  @Input() modalStyles: any;
  @Input() modalId: string;
  @Input() entranceDuration = "250ms";
  @Input() entranceAnimations = [];
  @Input() exitDuration = "250ms";
  @Input() exitAnimations = [];

  mustShowOverlay = false;

  constructor(public accessibleModalService: AccessibleModalService) {}

  ngOnDestroy() {}
}
