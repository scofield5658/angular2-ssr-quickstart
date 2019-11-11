import { HelloComponent } from "../containers/hello/hello.component";
import { AboutComponent } from "../containers/about/about.component";
import { PeopleComponent } from "../containers/people/people.component";
import { PersonComponent } from "../containers/person/person.component";
import { PeopleService } from "../services/people";
import { Transition } from "@uirouter/core";
import { peopleStateResolveFn, personStateResolveFn } from './resolveFn';

/** States */
export const helloState = { name: "hello", url: "/hello", component: HelloComponent };

export const aboutState = { name: "about", url: "/about", component: AboutComponent };

export const peopleState = {
  name: "people",
  url: "/people",
  component: PeopleComponent,
  resolve: [
    {
      token: "people",
      deps: [PeopleService],
      resolveFn: peopleStateResolveFn,
    }
  ]
};

export const personState = {
  name: "people.person",
  url: "/:personId",
  component: PersonComponent,
  resolve: [
    {
      token: "person",
      deps: [Transition, 'people'],
      resolveFn: personStateResolveFn,
    }
  ]
};

export default [helloState, aboutState, peopleState, personState];
