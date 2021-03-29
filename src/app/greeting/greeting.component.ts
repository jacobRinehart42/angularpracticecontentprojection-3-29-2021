import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-greeting",
  template: `
    <ng-content select="h1"></ng-content>
    <ng-content select="app-button"></ng-content>
    <h2>It is hot out there</h2>
    <ng-content select="p"></ng-content>
  `,
  styleUrls: ["./greeting.component.css"]
})
export class GreetingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
