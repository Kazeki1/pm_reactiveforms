import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolService } from './tool.service';
import { StarComponent } from './shared/star.component';
import { ToolDetailComponent} from './tool-detail/tool-detail.component';
import { ToolGuardService } from './tool-list/tool-guard.service';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customers/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    StarComponent,
    ToolDetailComponent,
    ConvertToSpacesPipe,
    WelcomeComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: 'tool', component: ToolListComponent },
      { path: 'tool/:id',
        canActivate: [ToolGuardService],
        component: ToolDetailComponent
      },
      { path: 'customers', component: CustomerComponent}
    ]),

  ],
  providers: [ToolService, ToolGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
