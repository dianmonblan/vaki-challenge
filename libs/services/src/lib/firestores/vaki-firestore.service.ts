import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import firebase from 'firebase/app';

// CUSTOM LIBRARIES
import { VakiModel } from '@vaki-challenge/models';

@Injectable()
export class VakiFirestoreService {
  private _vakersCollection: AngularFirestoreCollection<VakiModel>;
  get collectionName(): string {
    return 'vakers';
  };

  constructor(private _angularFirestore: AngularFirestore) {
    this._vakersCollection = this._angularFirestore.collection<VakiModel>(this.collectionName);
  }

  add(vaki: VakiModel) {
    this._vakersCollection.add(vaki);
  }

  update(vaki: VakiModel) {
    this._vakersCollection.doc(`${vaki.url}`).update(vaki);
  }

  delete(vakiURL: string) {
    this._vakersCollection.doc(`${vakiURL}`).delete();
  }

  list(options?: firebase.firestore.GetOptions): Observable<QuerySnapshot<VakiModel>> {
    let list: Observable<QuerySnapshot<VakiModel>> | Promise<QuerySnapshot<VakiModel>> = this._vakersCollection.get(options)

    if (list instanceof Promise)
      list = from(list);

    return list;
  }
}
