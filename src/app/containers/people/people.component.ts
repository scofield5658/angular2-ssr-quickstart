import { Component, Input } from "@angular/core";

@Component({
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.styl"],
})
export class PeopleComponent {
  @Input() people;
}
