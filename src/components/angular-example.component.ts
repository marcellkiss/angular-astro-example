import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, Input, inject } from "@angular/core";
import { AngularExampleService } from "./angular-example.service";
import { ButtonComponent } from "./button.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [HttpClientModule, ButtonComponent],
  template: `<div>
    <h1>Angular Example</h1>
    <h3>{{ subtitle }}</h3>
    <p>New Blog Post</p>
    <app-button (customClick)="onClick()"></app-button>
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

  constructor() {
    console.log("AngularExampleComponent constructor");
    this.#http
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .subscribe((data: any) => {
        console.log(data);
      });

    inject(AngularExampleService).click$.subscribe(() => {
      console.log("Click in AngularExampleComponent");
    });
  }

  onClick() {
    // console.log("Header Button Clicked");
  }
}
