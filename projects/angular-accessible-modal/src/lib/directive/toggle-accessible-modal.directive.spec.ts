import { TestBed, ComponentFixture } from "@angular/core/testing";
import { ToggleAccessibleModalDirective } from "./toggle-accessible-modal.directive";
import {
  Component,
  HostListener,
  ElementRef,
  DebugElement,
} from "@angular/core";
import { AccessibleModalService } from "./accessible-modal.service";
import { By } from "@angular/platform-browser";

@Component({
  template: `<div acmToggleAccessibleModal modalId="my-modal"></div>`,
})
class TestComponent {}

class MockElementRef {
  nativeElement = {
    blur: () => {},
    focus: () => {},
  };
}

describe("ToggleAccessibleModalDirective", () => {
  let component: TestComponent;
  let ref: MockElementRef;
  let fixture: ComponentFixture<TestComponent>;
  let debugEl: DebugElement;
  let directive: ToggleAccessibleModalDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleAccessibleModalDirective, TestComponent],
      providers: [{ provide: ElementRef, useClass: MockElementRef }],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    ref = new MockElementRef();
    debugEl = fixture.debugElement.query(
      By.directive(ToggleAccessibleModalDirective)
    );
    directive = debugEl.injector.get(ToggleAccessibleModalDirective);
  });

  it("should toggle the modal when clicked", () => {
    spyOn(directive.accessibleModalService, "toggleModal");

    debugEl.nativeElement.click();

    expect(directive.accessibleModalService.toggleModal).toHaveBeenCalled();
  });

  it("should toggle the modal when escape is pressed and there is already a modal open", () => {
    spyOn(directive.accessibleModalService, "toggleModal");
    directive.accessibleModalService.modalId = "my-modal";

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

    expect(directive.accessibleModalService.toggleModal).toHaveBeenCalled();
  });
});
