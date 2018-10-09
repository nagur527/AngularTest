import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '../../node_modules/@angular/router';



const routes: Routes = [
  { path: 'users', component: UserListComponent },
  {path:'user',loadChildren:'app/userDetails/user-details.module#UserDetailsModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
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
