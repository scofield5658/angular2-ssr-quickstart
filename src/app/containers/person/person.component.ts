import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs'

import { PeopleService } from 'src/app/services/people';

@Component({
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.styl"],
})
export class PersonComponent implements OnInit {
  person$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PeopleService
  ) {}

  ngOnInit() {
    this.person$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getPerson(params.get('personId')))
    );
  }
}
