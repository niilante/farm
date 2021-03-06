import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { routing, puuniRoutingProviders } from './app.routes';
import { Ng2PageTransitionModule } from "ng2-page-transition";
import 'hammerjs';

import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { FarmComponent } from './farm/farm.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginViewComponent } from './auth/login/login-view.component';
import { AuthService } from "./auth/auth.service";
import { UserService } from "./users/user.service";
import { AuthGuard } from "./auth/auth-guard";
import { UsersComponent } from './users/users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { EqualTextValidator} from "./users/equal.validator";
import { firebaseConfig, firebarebaseLoginConfig } from "./app.settings";
import { RoleService} from "./roles/role.service";
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ImageCropperComponent } from "ng2-img-cropper";
import { UploadService } from "./storage/upload.service";


export const firepuuniLoginConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent,
    FarmComponent,
    ShopComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    FooterComponent,
    LandingComponent,
    ProductdetailComponent,
    CheckoutComponent,
    TopToolbarComponent,
    HomeComponent,
    LoginComponent,
    LoginViewComponent,
    UsersComponent,
    UserListComponent,
    UserComponent,
    UserCreateComponent,
    EqualTextValidator,
    UserProfileComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig, firepuuniLoginConfig)
  ],
  providers: [
    puuniRoutingProviders,
    AuthService,
    UserService,
    FlexLayoutModule,
    AuthGuard,
    RoleService,
    UploadService
    ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
