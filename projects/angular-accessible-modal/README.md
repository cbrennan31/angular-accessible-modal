# Angular Accessible Modal
#### An Angular modal wrapper component that aims to be fully accessible. Keyboard navigation is trapped within the modal while it is open, and the modal can be closed by pressing `escape`. Styles are customizable. 

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
<button appToggleAccessibleModal> 
	// use this directive to trigger modal
	Open modal
</button>

<app-accessible-modal> 
	// use this component tag to wrap any content
	<h2>My Modal</h2>
	<button appToggleAccessibleModal>Close modal</button>
</app-accessible-modal>
```

## Toggle the Modal Programmatically
Within your component's `.ts.` file:
```
import { AccessibleModalService } from 'angular-accessible-modal';
...
constructor (private accModalService: AccessibleModalService) {}
...
toggleModal() {
	this.accModalService.toggleModal()
}
```

## Customizing Styles
Use the `overlayStyles` input to adjust the appearance of the background. Example:
```
<app-accessible-modal [overlayStyles]="{background: 'rgba(0, 0, 0, 0.5)'}">
```
Use the `modalStyles` input to adjust the appearance of the modal itself. For example, if you want the modal to appear near the top of the window, rather than centered vertically:
```
<app-accessible-modal 
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

## Coming Soon
Optional animations
