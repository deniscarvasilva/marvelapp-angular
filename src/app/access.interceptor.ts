import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { accessRequest } from 'src/environments/environment';

@Injectable()
export class AccessInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request_marvel = request.clone({
      params: (request.params ? request.params : new HttpParams()).appendAll(
        accessRequest
      ),
    });
    return next.handle(request_marvel);
  }
}
