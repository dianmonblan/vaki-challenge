import { Component, OnInit } from '@angular/core';
import { QuerySnapshot } from '@firebase/firestore-types';

// CUSTOM LIBRARIES
import { VakiFirestoreService } from '@vaki-challenge/services';
import { VakiModel } from "@vaki-challenge/models";

@Component({
  selector: 'vaki-challenge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  public title: string = 'vakers';

  constructor(
    private _vakiFirestoreService: VakiFirestoreService
  ) { }

  ngOnInit(): void {
    this._vakiFirestoreService.list()
      .subscribe((vakers: QuerySnapshot<VakiModel>) => this.title = vakers.docs[0].data().name);
  }
}