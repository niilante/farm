import { ModuleWithProviders, NgModule }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DownloadComponent } from './download/download.component';
import { FarmComponent } from './farm/farm.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginViewComponent } from './auth/login/login-view.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import {AuthGuard} from "./auth/auth-guard";
import { UsersComponent } from './users/users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { UserCreateComponent } from './users/user-create/user-create.component';

const puuniRoutes: Routes = [
  //{ path: 'landing', component: LandingComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'farm', component: FarmComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', component: ProductdetailComponent },
 // { path: '**', component: NotfoundComponent },
  //{ path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard], data: {roles: ['educator', 'admin']} },
  { path: 'login', component: LoginComponent }
];

export const puuniRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(puuniRoutes);