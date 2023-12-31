import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
