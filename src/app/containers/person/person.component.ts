import { Component, Input } from "@angular/core";

@Component({
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.styl"],
})
export class PersonComponent {
  @Input() person;
}
