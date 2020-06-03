import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccessibleModalComponent } from "./component/accessible-modal.component";
import { AccessibleModalService } from "./service/accessible-modal.service";
import { ToggleAccessibleModalDirective } from "./directive/toggle-accessible-modal.directive";
import { A11yModule } from "@angular/cdk/a11y";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AccessibleModalComponent, ToggleAccessibleModalDirective],
  imports: [CommonModule, A11yModule, BrowserAnimationsModule],
  exports: [AccessibleModalComponent, ToggleAccessibleModalDirective],
})
export class AccessibleModalModule {}
