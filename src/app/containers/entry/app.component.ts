import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.styl"],
})
export class AppComponent {
  debugUiView = false;
  debugUiSref = false;

  get debugClasses() {
    const debugViewClass = this.debugUiView ? 'debug-ui-view' : '';
    const debugSrefClass = this.debugUiSref ? 'debug-ui-sref' : '';
    return `${debugViewClass} ${debugSrefClass}`;
  }
}
