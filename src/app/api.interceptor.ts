import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

export class APIInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do(event => {
            if (event instanceof HttpRequest) {
                console.log('A new request intercepted');
            } else if (event instanceof HttpResponse) {
                console.log('A new response intercepted');
            }
        }).catch(this.handleError);
    }

    handleError(error: HttpErrorResponse) {
        return Observable.throw(error);
    }

}
