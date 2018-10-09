import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'users', loadChildren: 'app/user-list/user-list.module#UserListModule' },
  { path: 'user', loadChildren: 'app/userDetails/user-details.module#UserDetailsModule' },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
