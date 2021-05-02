import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {
    path: 'home', component: HomeComponent
    },
    {
    path: 'projects', component: ProjectsComponent 
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
    exports: [ RouterModule ]
    })
export class AppRoutingModule { }
  