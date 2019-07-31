import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "[appButton]",
  template: `
    <button class="the-button" mat-raised-button [color]="color || 'warn'">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {
  @Input("appButton")
  color: string = "warn";
}
