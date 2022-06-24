/* guard est une classe qui implémente l'interface CanActivate. 
La classe doit être  @Injectable()  et  providedIn: 'root'  comme un service,
 et doit contenir une méthode  canActivate() .
 Dans un sous-dossier  guards  du dossier  core  , créez  auth.guard.ts  : */

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";



 @Injectable({
     providedIn:'root'
 })

 export class AuthGuard implements CanActivate{
     constructor(private auth:AuthService,
        private router:Router){}

        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            const token=this.auth.getToken();

            if(token){
                return true
            }else{
                this.router.navigateByUrl('/auth/login');
                return false;
            }
            
        }
 }