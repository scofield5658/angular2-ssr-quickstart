import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(@Inject(HttpClient) public http: HttpClient) {
    console.log("PeopleService constructor");
  }

  getAllPeople() {
    return this.http.get<any[]>("/assets/people.json").toPromise();
  }

  getPerson(id) {
    function personMatchesParam(person) {
      return person.id === id;
    }

    return this.getAllPeople().then(people => people.find(personMatchesParam));
  }
}
