import { PeopleService } from "../services/people";
import { Transition } from "@uirouter/core";

export function peopleStateResolveFn(peopleService: PeopleService) {
  return peopleService.getAllPeople();
}

export function personStateResolveFn(trans: Transition, people: any[]) {
  return people.find(person => person.id === trans.params().personId);
}
