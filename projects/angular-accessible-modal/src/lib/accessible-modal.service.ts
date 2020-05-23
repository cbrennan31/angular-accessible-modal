import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccessibleModalService {
	modalId: string = null;
	modalTrigger: ElementRef = null;

	toggleModal(modalId: string = null, modalTrigger: ElementRef = null) {
		this.modalId = this.modalId ? null : modalId;

		if (this.modalId) {
			this.modalTrigger = modalTrigger;
			this.modalTrigger
				&& this.modalTrigger.nativeElement
				&& this.modalTrigger.nativeElement.blur();
		} else {
			this.modalTrigger
				&& this.modalTrigger.nativeElement 
				&& this.modalTrigger.nativeElement.focus();
			this.modalTrigger = null;
		}
	}
}