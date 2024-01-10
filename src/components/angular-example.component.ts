import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, Input, inject } from "@angular/core";
import { ButtonComponent } from "./button.component";
import { ButtonService } from "./button.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [HttpClientModule, ButtonComponent, CommonModule],
  template: `<div>
    <h1>Angular Example</h1>
    <h3>{{ subtitle }}</h3>
    <div class="grid gap-2">
      <p>New Blog Post</p>
      <app-button (customClick)="onClick()"></app-button>
      <pre>{{ remoteData | json }}</pre>
    </div>
  </div>`,
  styles: `
    :host {
      display: block;
      border: 1px solid red;
      padding: 10px;
    }
  `,
})
export class AngularExampleComponent {
  @Input() subtitle = "Default Subtitle";
  #http = inject(HttpClient);
  remoteData: any;

  constructor() {
    console.log("AngularExampleComponent constructor");

    inject(ButtonService).click$.subscribe(() => this.#handleClick());
  }

  #handleClick() {
    console.log("Click in AngularExampleComponent");

    // Initiate remote data fetch
    this.#http
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .subscribe((data: any) => {
        this.remoteData = data;
        console.log(data);
      });
  }
}
