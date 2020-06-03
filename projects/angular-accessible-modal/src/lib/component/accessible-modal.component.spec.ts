import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AccessibleModalComponent } from "./accessible-modal.component";

describe("AccessibleModalComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AccessibleModalComponent],
    }).compileComponents();
  }));

  it("should create the component", () => {
    const fixture = TestBed.createComponent(AccessibleModalComponent);
    const modalComponent = fixture.debugElement.componentInstance;
    expect(modalComponent).toBeTruthy();
  });
});
