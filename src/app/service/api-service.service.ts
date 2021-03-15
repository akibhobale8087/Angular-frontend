import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../model/product";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class ApiServiceService {
  private BASE_URL = "http://localhost:8000/api/v1";

  constructor(private httpClient: HttpClient, private auth: AuthService) {}

  headers = new HttpHeaders()
    .set("content-type", "application/json")
    .set("Access-Control-Allow-Origin", "*")
    .set("authorization", this.auth.getToken());

  //   getcard: Observable<Card[]>(){
  //     return this.httpClient.get(`${this.BASE_URL}/card`,{ 'headers': headers })
  // }

  // addPerson(person:Person): Observable<Person> {
  //   const headers = { 'content-type': 'application/json'}
  //   const body=JSON.stringify(person);
  //   console.log(body)
  //   return this.http.post<Person>(this.baseURL + 'people', body,{'headers':headers})
  // }

  addProduct(product: Product) {
    console.log(product);
    const body = JSON.stringify(product);
    return this.httpClient.post<Product>(
      this.BASE_URL + "/user/productCreate",
      body,
      {
        headers: this.headers,
      }
    );
  }

  getAll() {
    return this.httpClient.get(this.BASE_URL + "/user/productList", {
      headers: this.headers,
    });
  }

  get(id) {
    return this.httpClient.get(this.BASE_URL + "/user/cardInfo/" + id, {
      headers: this.headers,
    });
  }
  delete(id: any) {
    return this.httpClient.delete(this.BASE_URL + "/user/deleteProduct/" + id, {
      headers: this.headers,
    });
  }
}
