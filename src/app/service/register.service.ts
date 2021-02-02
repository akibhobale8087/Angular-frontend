import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Register } from "../model/register";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  private BASE_URL = "http://localhost:8000/api/v1";
  headers = { "content-type": "application/json" };
  constructor(private httpClient: HttpClient) {}

  addPerson(register: Register) {
    const body = JSON.stringify(register);
    return this.httpClient.post<Register>(
      this.BASE_URL + "/user/signup",
      body,
      {
        headers: this.headers,
      }
    );
  }
}
