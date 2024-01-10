import { Component, inject } from "@angular/core";
import { ButtonService } from "./button.service";

@Component({
  selector: "app-button",
  standalone: true,
  template: `<button
    (click)="onClick()"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Load data
  </button>`,
})
export class ButtonComponent {
  #buttonService = inject(ButtonService);
  // @Output() customClick = new EventEmitter<void>();

  onClick() {
    console.log("Click in ButtonComponent");
    this.#buttonService.click$.next();
    // this.customClick.emit();
  }
}
