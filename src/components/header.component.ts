import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, Input, inject } from "@angular/core";
import { ButtonComponent } from "./button.component";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [HttpClientModule, ButtonComponent],
  template: `<div>
    <p>This is an Angular based Header Component</p>
    <h1>{{ title }}</h1>
    <p>New Blog Post</p>
    <app-button (customClick)="onClick()"></app-button>
  </div>`,
  styles: `
    :host {
      color: white;
      display: block;
      border: 1px solid red;
      padding: 10px;
    }
  `,
})
export class HeaderComponent {
  @Input() title = "Default Title";
  #http = inject(HttpClient);

  constructor() {
    console.log("HeaderComponent constructor");
    this.#http
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .subscribe((data: any) => {
        console.log(data);
      });

    inject(HeaderService).click$.subscribe(() => {
      console.log("Header Button Click Received");
    });
  }

  onClick() {
    console.log("Header Button Clicked");
  }
}
