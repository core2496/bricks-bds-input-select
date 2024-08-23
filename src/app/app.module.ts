import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgComponentsLibraryModule } from '@bricks/ng-components';
import { AppInitializerService } from './app-initializer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgComponentsLibraryModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppInitializerService,
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitializer: AppInitializerService) => () =>
        appInitializer.initializeApp(),
      deps: [AppInitializerService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }