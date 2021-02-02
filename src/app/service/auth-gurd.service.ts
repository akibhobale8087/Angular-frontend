import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGurdService implements CanActivate {
  constructor(
    private authService: AuthService,
    public router: Router //public jwtService: JwtService
  ) {}

  canActivate(): boolean {
    if (this.authService.getToken()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
