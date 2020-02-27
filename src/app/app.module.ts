import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component'; 

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgHttpLoaderModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
