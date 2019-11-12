import { AppComponent } from "./containers/entry/app.component";

import { HelloComponent } from "./containers/hello/hello.component";
import { AboutComponent } from "./containers/about/about.component";
import { PeopleComponent } from "./containers/people/people.component";
import { PersonComponent } from "./containers/person/person.component";

import { CounterComponent } from './components/counter/counter.component';

export const INIT_COMPONENTS = [
  // entry
  AppComponent,

  // containers
  HelloComponent,
  AboutComponent,
  PeopleComponent,
  PersonComponent,

  // components
  CounterComponent,
];
