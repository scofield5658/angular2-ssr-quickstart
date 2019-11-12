import { Component } from '@angular/core';
import { EchoService } from 'src/app/services/echo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-echo',
  templateUrl: './echo.component.html',
  styleUrls: ['./echo.component.styl'],
})
export class EchoComponent {
  response$: Observable<any>;

  constructor(
    private service: EchoService
  ) {}

  sendEcho(text) {
    this.response$ = this.service.getEchoResponse(text);
  }
}
