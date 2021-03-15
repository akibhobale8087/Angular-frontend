import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiServiceService } from "../../service/api-service.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"],
})
export class ViewComponent implements OnInit {
  card: any;
  constructor(
    private _router: Router,
    private api: ApiServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getRecord();
  }

  getRecord() {
    const cardId = this.activatedRoute.snapshot.params.id;
    this.api.get(cardId).subscribe(
      (data: any) => {
        if (data.success) {
          this.card = data.payload.data;
        } else {
          alert(data.error);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
