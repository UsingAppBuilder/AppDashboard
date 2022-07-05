import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { IgxCardModule, IgxGridModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';
import { MasterView1Component } from './master-view1/master-view1.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterViewComponent,
    MasterView1Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCardModule,
    IgxGridModule,
    IgxCategoryChartModule,
    FormsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
