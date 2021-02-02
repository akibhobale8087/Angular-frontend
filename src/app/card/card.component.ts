import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { Product } from "../model/product";
import { ApiServiceService } from "../service/api-service.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  products: Product[];
  constructor(
    private _router: Router,
    private authService: AuthService,
    private api: ApiServiceService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.api.getAll().subscribe((data: any) => {
      if (data.success) {
        this.products = data.payload.data;
      } else {
        alert(data.error);
      }
    });
  }
  logout() {
    this.authService.logOut();
  }

  deleteProductid(id: any) {
    this.api.delete(id).subscribe((data: any) => {
      if (data.success) {
        this.loadData();
      } else {
        alert(data.error);
      }
    });
  }
}
