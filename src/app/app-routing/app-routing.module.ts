import { Routes } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';

const routes: Routes = [
  { path: '/users', component: UserListComponent }
];
export class AppRoutingModule { }
