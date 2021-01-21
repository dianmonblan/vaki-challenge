import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// CUSTOM LIBRARIES
import { VakiModel } from '@vaki-challenge/models';

@Injectable()
export class VakiFirestoreService {
  private _vakesCollection: AngularFirestoreCollection<VakiModel>;
  public vakes: Observable<VakiModel[]>;
  get collectionName(): string {
    return 'vakers';
  };

  constructor(private _angularFirestore: AngularFirestore) {
    this._vakesCollection = this._angularFirestore.collection<VakiModel>(this.collectionName);
    this.vakes = this._vakesCollection.valueChanges();
  }

  add(vaki: VakiModel) {
    this._vakesCollection.add(vaki);
  }

  update(vaki: VakiModel) {
    this._vakesCollection.doc(`${vaki.url}`).update(vaki);
  }

  delete(vakiURL: string) {
    this._vakesCollection.doc(`${vakiURL}`).delete();
  }
}
