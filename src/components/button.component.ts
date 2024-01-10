import { Component, inject } from "@angular/core";
import { AngularExampleService } from "./angular-example.service";

@Component({
  selector: "app-button",
  standalone: true,
  template: `<button
    (click)="onClick()"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Click Me
  </button>`,
})
export class ButtonComponent {
  #angularExampleService = inject(AngularExampleService);
  // @Output() customClick = new EventEmitter<void>();

  onClick() {
    console.log("Click in ButtonComponent");
    this.#angularExampleService.click$.next();
    // this.customClick.emit();
  }
}
