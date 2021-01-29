import { Injectable } from '@angular/core';
import { makeStateKey, StateKey } from '@angular/platform-browser';

// CUSTOM LIBRARIES
import { COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE } from '@vaki-challenge/configurations';
import { VakiModel } from '@vaki-challenge/models';

// CUSTOM SERVICES
import { FirestoreService } from './firestore.service';

@Injectable()
export class VakiFirestoreService extends FirestoreService<VakiModel>{
  public collectionName: string = COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE.VAKERS;
  public stateKey: StateKey<VakiModel[]> = makeStateKey(COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE.VAKERS);
}