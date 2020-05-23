import {
  Component,
  OnDestroy,
  EventEmitter,
  Renderer2,
  Input
} from '@angular/core';

import { AccessibleModalService } from './accessible-modal.service';

@Component({
  selector: 'app-accessible-modal',
  templateUrl: './accessible-modal.component.html',
  styleUrls: ['./accessible-modal.component.css']
})

export class AccessibleModalComponent implements OnDestroy {
  @Input() overlayStyles: any;
  @Input() modalStyles: any;
  @Input() modalId: string;

  constructor (
    public renderer: Renderer2, 
    public accessibleModalService: AccessibleModalService
   ) {
    this.renderer.setAttribute(document.body, 'style', 'overflow: hidden;');
  }

  ngOnDestroy() {
    this.renderer.setAttribute(document.body, 'style', 'overflow: auto;');
  }
}
