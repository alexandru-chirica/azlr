import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // Leave change detection as default for components that use ion-nav or ion-router-outlet
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() { }
}
