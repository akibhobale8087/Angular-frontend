import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardRoutingModule } from "./card-routing.module";
import { CardComponent } from "./card.component";
import { AddComponent } from "./add/add.component";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [CardComponent, AddComponent],
  imports: [
    CommonModule,
    CardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CardModule {}
