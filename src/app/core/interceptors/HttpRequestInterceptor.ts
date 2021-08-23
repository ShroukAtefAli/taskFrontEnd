import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(private router:Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.indexOf('/login') !== -1){
            return next.handle(req);
        }
        const accessToken = localStorage.getItem('accessToken');
             const newReq = req.clone({
                headers: new HttpHeaders({
                    'Authorization': `Bearer ${accessToken }`
                })
            });
         
             return next.handle(newReq).pipe(
                 tap(),
                 catchError((error: HttpErrorResponse) => {                    
                    if (error.status === 401) {
                        window.location.reload();
                    }
                    if (error.status === 403) {
                        alert('you have no access for this action');
                    }
                    return throwError(error);
                 })
             );
        }


}
