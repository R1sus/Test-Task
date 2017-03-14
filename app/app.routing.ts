import { Routes, RouterModule } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { UserComponent } from './users/users.component';




const appRoutes: Routes = [
    { path: '', redirectTo: '/users', pathMatch:'full'},
    { path: 'users', component: UserComponent}
    // { path: '**', component: NotFoundComponent }

];

export const routing = RouterModule.forRoot(appRoutes,{useHash:true});



/**
 * Created by Nadine on 13.03.2017.
 */
