import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccessibleModalService {
	showModal: boolean = false;

	toggleModal() {
		this.showModal = !this.showModal;
	}
}