import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginModule } from "./login/login.module";
import { AuthGurdService } from "./service/auth-gurd.service";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadChildren: "./login/login.module#LoginModule" },
  {
    path: "register",
    loadChildren: "./register/register.module#RegisterModule",
  },
  {
    path: "card",
    loadChildren: "./card/card.module#CardModule",
    canActivate: [AuthGurdService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
