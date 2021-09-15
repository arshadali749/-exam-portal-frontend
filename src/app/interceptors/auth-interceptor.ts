import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private login: LoginService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("inside the intercept ()")
        let reqClone = req;

        const token = this.login.getToken();
        
        if (token != null) {

            console.log("TOKEN: "+token);
            
            reqClone = req.clone({
                setHeaders: {
                    Authorization: 'Bearer '+token
                },
            });
        }
        else if(token==null){
            console.log("TOKEN NOT FOUND  .. going to request for token ..." );
            
             return next.handle(req)
        }
        console.log("Going to process request to the server ...");
        
        return next.handle(reqClone);
    }


}
export const authInterceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
},
];