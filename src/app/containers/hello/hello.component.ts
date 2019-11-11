import { Component } from "@angular/core";

@Component({
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.styl"],
})
export class HelloComponent {
  greeting = "hello";

  toggleGreeting() {
    this.greeting = this.greeting === "hello" ? "whats up" : "hello";
  }
}
