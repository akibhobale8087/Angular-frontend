import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private _router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
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
    const formValues = Object.assign({}, this.loginForm.value);

    const loginInformation = {
      email: formValues.email,
      password: formValues.password,
    };

    this.authService.login(loginInformation).subscribe(
      (data: any) => {
        this.authService.setToken(data.payload.data.token);
        this._router.navigate(["/card"]);
      },
      (error) => {
        alert(error);
        console.log(error);
      }
    );
  }
}
