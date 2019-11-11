import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './containers/hello/hello.component';
import { AboutComponent } from './containers/about/about.component';
import { PeopleComponent } from './containers/people/people.component';
import { PersonComponent } from './containers/person/person.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'people',
    component: PeopleComponent,
    children: [
      { path: ':personId', component: PersonComponent },
    ]
  },
  { path: '**', redirectTo: 'hello' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
