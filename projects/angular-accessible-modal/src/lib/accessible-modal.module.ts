import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibleModalComponent } from './accessible-modal.component';
import { AccessibleModalService } from './accessible-modal.service';
import { ToggleAccessibleModalDirective } from './toggle-accessible-modal.directive';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
	declarations: [
		AccessibleModalComponent,
		ToggleAccessibleModalDirective
	],
	imports: [
		CommonModule,
		A11yModule
	],
	exports: [
		AccessibleModalComponent,
		ToggleAccessibleModalDirective
	]
})

export class AccessibleModalModule {};