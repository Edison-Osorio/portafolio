import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {
    path:" /", 
    component:StartComponent, 
  },
  {
    path :'home',
     component: HomeComponent
  },{
   path: "***", 
   redirectTo: "/home"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
