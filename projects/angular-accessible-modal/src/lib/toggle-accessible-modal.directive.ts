import {
	Directive,
	ElementRef,
	HostListener 
} from '@angular/core';

import { AccessibleModalService } from './accessible-modal.service';

@Directive({
  selector: '[appToggleAccessibleModal]'
})

export class ToggleAccessibleModalDirective {
	constructor(private accessibleModalService: AccessibleModalService) {};

	@HostListener('click', ['$event']) onClick(event: any) {
		this.accessibleModalService.toggleModal();
	}

	@HostListener('document:keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
		if ((event.key === 'Escape' || event.key === 'Esc')
			&& this.accessibleModalService.showModal)
		{
			this.accessibleModalService.toggleModal();
		}
	}
}