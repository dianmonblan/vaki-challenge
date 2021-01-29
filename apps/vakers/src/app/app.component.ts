import { Component, OnInit } from "@angular/core";

// CUSTOM LIBRARIES
import { VakiFirestoreService } from "@vaki-challenge/services";
import { VakiModel } from "@vaki-challenge/models";

@Component({
  selector: 'vaki-challenge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public title: string = this._vakiFirestoreService.documents?.[0].name ?? 'vakers';

  constructor(
    private _vakiFirestoreService: VakiFirestoreService
  ) { }

  ngOnInit(): void {
    this._vakiFirestoreService.list()
      .subscribe((vakers: VakiModel[]) => this.title = vakers[0].name);
  }
}