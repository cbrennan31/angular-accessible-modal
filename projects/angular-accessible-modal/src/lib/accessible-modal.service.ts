import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccessibleModalService {
	showModal: boolean = false;
	modalTrigger: ElementRef = null;

	toggleModal(modalTrigger?: ElementRef) {
		this.showModal = !this.showModal;

		if (this.showModal) {
			this.modalTrigger = modalTrigger;
			this.modalTrigger.nativeElement.blur();
		} else {
			this.modalTrigger.nativeElement 
				&& this.modalTrigger.nativeElement.focus();
			this.modalTrigger = null;
		}
	}
}