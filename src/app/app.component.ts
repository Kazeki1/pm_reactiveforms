import { Component } from '@angular/core';
import { ToolService } from './tool.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToolService]
})
export class AppComponent {
  title = 'Tool List';
}
