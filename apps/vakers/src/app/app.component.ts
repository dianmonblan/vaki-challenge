import { Component, OnInit } from "@angular/core";

// CUSTOM SERVICES
import { VakiFirestoreService } from "@vaki-challenge/services";

// CUSTOM MODELS
import { VakiModel } from "@vaki-challenge/models";

@Component({
  selector: 'vaki-challenge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public title: string = this._vakiFirestoreService.getDocument()?.name || 'vakers';

  constructor(
    private _vakiFirestoreService: VakiFirestoreService
  ) { }

  ngOnInit(): void {
    this._vakiFirestoreService.document('6gCLvPJazQpn3fiTcEct')
      .subscribe((vaki: VakiModel) => this.title = vaki.name);
  }
}