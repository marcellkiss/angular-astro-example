import { Component, inject } from "@angular/core";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-button",
  standalone: true,
  template: `<button (click)="onClick()">Click Me</button>`,
})
export class ButtonComponent {
  #headerService = inject(HeaderService);
  // @Output() customClick = new EventEmitter<void>();

  onClick() {
    console.log("Button Clicked");
    this.#headerService.click$.next();
    // this.customClick.emit();
  }
}
