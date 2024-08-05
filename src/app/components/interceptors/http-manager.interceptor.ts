import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Injectable()
export class HttpManagerInterceptor implements HttpInterceptor {

  constructor(private service:LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.service.loading.next(true);
    return next.handle(req).pipe(
      catchError(err=>{
        console.log(err);
        return throwError(err);
      }),
      finalize(()=>{
        this.service.loading.next(false);
      })
    );
  }
}
