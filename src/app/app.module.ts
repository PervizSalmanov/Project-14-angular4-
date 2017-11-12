import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '../components/header-component/header.component';
import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import { SliderComponent }  from '../components/slider-component/slider.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule {

}
