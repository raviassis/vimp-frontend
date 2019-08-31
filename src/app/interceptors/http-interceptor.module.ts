import { Injectable, NgModule } from '@angular/core';
import {
 HttpEvent,
 HttpInterceptor,
 HttpHandler,
 HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    console.log('caiu aki');
    const token = sessionStorage.getItem('token');
    console.log('token ' + token );
    if (token) {
      const dupReq = req.clone({
        headers: req.headers.set('authorization', token),
      });
      return next.handle(dupReq);
    } else {
      return next.handle(req);
    }
  }
}

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
})
export class HttpInterceptorModule { }
