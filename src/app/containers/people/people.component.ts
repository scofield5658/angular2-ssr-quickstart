import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs'

import { PeopleService } from 'src/app/services/people';

@Component({
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.styl"],
})
export class PeopleComponent implements OnInit {
  people$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private service: PeopleService
  ) {}

  ngOnInit() {
    this.people$ = this.route.paramMap.pipe(
      switchMap(() =>
        this.service.getAllPeople())
    );
  }
}
