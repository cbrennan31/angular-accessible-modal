import { TestBed } from "@angular/core/testing";
import { ElementRef } from "@angular/core";

import { AccessibleModalService } from "./accessible-modal.service";

class MockElementRef {
  nativeElement = {
    blur: () => {},
    focus: () => {},
  };
}

describe("AccessibleModalService", () => {
  let service: AccessibleModalService;
  let ref: MockElementRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useClass: MockElementRef }],
    });

    service = TestBed.get(AccessibleModalService);
    ref = new MockElementRef();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("#toggleModal", () => {
    it("should set the modalId and the modal trigger if the modalId is initially null", () => {
      service.toggleModal("abc", ref);

      expect(service.modalId).toEqual("abc");
      expect(service.modalTrigger).toEqual(ref);
    });

    it("should reset the modal and modalTrigger to null if the modalId is initially a string", () => {
      service.modalId = "abc";
      service.modalTrigger = ref;

      service.toggleModal();

      expect(service.modalId).toEqual(null);
      expect(service.modalTrigger).toEqual(null);
    });
  });
});
