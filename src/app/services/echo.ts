import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EchoService {
  constructor(@Inject(HttpClient) public http: HttpClient) {
    console.log("EchoService constructor");
  }

  getEchoResponse(text: string) {
    return this.http.get<any[]>('/api/echo', {
      params: {
        term: text,
      },
    });
  }
}
