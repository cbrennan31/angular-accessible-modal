import {
	Directive,
	ElementRef,
	HostListener,
	Input
} from '@angular/core';

import { AccessibleModalService } from './accessible-modal.service';

@Directive({
  selector: '[appToggleAccessibleModal]'
})

export class ToggleAccessibleModalDirective {
	@Input() modalId: string;

	constructor(
		private accessibleModalService: AccessibleModalService, 
		private modalTrigger: ElementRef
	) {};

	@HostListener('click', ['$event']) onClick(event: any) {
		this.accessibleModalService.toggleModal(this.modalId, this.modalTrigger);
	}

	@HostListener('document:keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
		if ((event.key === 'Escape' || event.key === 'Esc')
			&& this.accessibleModalService.modalId)
		{
			this.accessibleModalService.toggleModal(this.modalId);
		}
	}
}