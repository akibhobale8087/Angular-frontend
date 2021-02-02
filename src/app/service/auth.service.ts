import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { HttpClient } from "@angular/common/http";
import { Register } from "../model/register";
// import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  storageKey: string = "token";

  authToken;

  domain = "http://localhost:8000/api/v1";
  headers = { "content-type": "application/json" };
  constructor(
    // public jwtHelper: JwtHelperService,
    public router: Router,
    public httpClient: HttpClient
  ) {}

  setToken(token: string) {
    // console.log(token)
    localStorage.setItem(this.storageKey, token);
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn() {
    const token = this.getToken();
    if (token) {
      // return !this.jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
  }
  logOut() {
    this.authToken = null;
    localStorage.clear();
    localStorage.removeItem(this.storageKey);
    this.router.navigate(["/"]);
  }

  loadToken() {
    const token = localStorage.getItem("token");
    this.authToken = token;
  }

  login(user: Register) {
    const body = JSON.stringify(user);
    return this.httpClient.post(this.domain + "/user/login", body, {
      headers: this.headers,
    });
  }
}
