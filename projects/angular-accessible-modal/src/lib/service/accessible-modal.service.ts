import {
  Injectable,
  ElementRef,
  Renderer2,
  RendererFactory2,
} from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AccessibleModalService {
  renderer: Renderer2;
  modalId: string = null;
  modalTrigger: ElementRef = null;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleModal(modalId: string = null, modalTrigger: ElementRef = null) {
    this.modalId = this.modalId ? null : modalId;

    if (this.modalId) {
      this.modalTrigger = modalTrigger;
      this.modalTrigger &&
        this.modalTrigger.nativeElement &&
        this.modalTrigger.nativeElement.blur();

      this.renderer.setAttribute(document.body, "style", "overflow: hidden;");
    } else {
      this.modalTrigger &&
        this.modalTrigger.nativeElement &&
        this.modalTrigger.nativeElement.focus();
      this.modalTrigger = null;

      this.renderer.setAttribute(document.body, "style", "overflow: auto;");
    }
  }
}
