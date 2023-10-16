import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsService } from './components/product-details/serivce/products.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexComponent } from './components/index/index.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    IndexComponent,
    AdminComponent,
    ClientComponent,
    MenuComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
   
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
