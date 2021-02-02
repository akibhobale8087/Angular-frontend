import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterService } from "../service/register.service";
// import { Register } from "../model/register";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      password: ["", [Validators.required, Validators.minLength(7)]],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/),
        ],
      ],
    });
  }

  save() {
    const formValues = Object.assign({}, this.registerForm.value);

    const registerInformation = {
      email: formValues.email,
      password: formValues.password,
    };

    this.registerService.addPerson(registerInformation).subscribe(
      (data) => {
        console.log(data);
        if (data.success) {
          console.log(data);
          alert("success");
          this.registerForm.reset();
        } else {
          alert(data.error);
        }
      },
      (error) => {
        alert("error");
      }
    );
  }
}
