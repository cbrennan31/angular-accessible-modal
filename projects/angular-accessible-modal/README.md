# Angular Accessible Modal
#### An Angular modal wrapper component that aims to be fully accessible. Keyboard navigation is trapped within the modal while it is open, and the modal can be closed by pressing `escape`. Styles are customizable. Currently supports rendering one modal at a time.
#### Version 0.1.11 fixes a bug that prevented the modal from closing when clicking the backdrop.

## Adding to Project
In the relevant module file (e.g., `app.module.ts`):
```
import { AccessibleModalModule } from 'angular-accessible-modal';
...
@NgModule({
  imports: [
    AccessibleModalModule // include in the list of module imports
  ]
})
```

## Implementing the Modal
Within your component template:
```
<button 
	acmToggleAccessibleModal // use this directive to trigger modal
	modalId="my-modal"
> 
	Open modal
</button>

<acm-accessible-modal modalId="my-modal"> 
	// use this component tag to wrap any content
	// make sure the modalId input matches
	<h2>My Modal</h2>

	<button 
		acmToggleAccessibleModal // modalId input not necessary to close modal
		autofocus
	>
		Close modal
	</button>
</acm-accessible-modal>
```
Note: for accessibility, developers should take care to programatically focus the first interactable element of their modal content. Options include the `autofocus` attribute for certain HTML native elements, or placing the modal content inside a separate component and focusing the element in the `ngAfterViewInit` lifecycle hook. See guidance here: https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal

## Toggle the Modal Programmatically
Note that the directive is recommmended when a user interaction with a page element (e.g., click) *opens* the modal, since that will ensure that element retains focus when the modal closes. Another option is to pass an `ElementRef` representing the element as a second argument to the `toggleModal` method.

Within your component's `.ts` file:
```
import { AccessibleModalService } from 'angular-accessible-modal';
...
constructor (private accModalService: AccessibleModalService) {}
...
toggleModal() {
	this.accModalService.toggleModal('my-modal');
	// modalId argument necessary for opening modal, optional for closing modal
}
```

## Customizing Styles
Use the `overlayStyles` input to adjust the appearance of the background. Example:
```
<acm-accessible-modal 
	[overlayStyles]="{background: 'rgba(0, 0, 0, 0.5)'}"
>
```
Use the `modalStyles` input to adjust the appearance of the modal itself. For example, if you want the modal to appear near the top of the window, rather than centered vertically:
```
<acm-accessible-modal 
	[modalStyles]="{'align-self': 'inherit', 'margin-top': '20px'}"
>
```
By default, the modal is centered vertically and horizontally using:
```
{
	align-self: center; // the parent is a flex container
	margin: 0 auto;
}
```

## Enabling Animations
When the modal appears, a fade in and/or a slide down effect can be enabled.
Similarly, when the modal exits, a fade out and/or a slide up effect can be enabled.
Example usage:
```
<acm-accessible-modal 
  modalId="category-modal"
  [entranceAnimations]="['fadeIn', 'slideDown']" // default: []
  entranceDuration="300ms" // default: 250ms
  [exitAnimations]="['fadeOut', 'slideUp']" // default: []
  exitDuration="100ms" // default: 250ms
>
```