import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccessInterceptor } from './access.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { ListHeroesModule } from './pages/list-heroes/list-heroes.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ListHeroesModule,
    HttpClientModule,
    SharedModule

    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AccessInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
