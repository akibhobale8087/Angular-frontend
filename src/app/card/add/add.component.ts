import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiServiceService } from "../../service/api-service.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private api: ApiServiceService
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      price: ["", [Validators.required]],
      description: ["", [Validators.required]],
    });
  }

  save() {
    const formValues = Object.assign({}, this.productForm.value);

    const productInformation = {
      name: formValues.name,
      quantity: formValues.quantity,
      price: formValues.price,
      description: formValues.description,
    };
    this.api.addProduct(productInformation).subscribe(
      (data) => {
        this.productForm.reset();
        this.router.navigate(["/card"]);
      },
      (error) => {
        alert("error");
      }
    );
  }
}
