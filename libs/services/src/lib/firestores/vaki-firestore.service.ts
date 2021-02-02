import { Injectable } from '@angular/core';
import { makeStateKey, StateKey } from '@angular/platform-browser';

// CUSTOM CONFIGURATIONS
import { COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE } from '@vaki-challenge/configurations';

// CUSTOM MODELS
import { CreateModelIntance, VakiModel } from '@vaki-challenge/models';

// CUSTOM SERVICES
import { FirestoreAbstractService } from './firestore-abstract.service';

@Injectable()
export class VakiFirestoreService extends FirestoreAbstractService<VakiModel>{
  protected readonly _modelClass: CreateModelIntance<VakiModel> = VakiModel;
  public readonly collectionName: string = COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE.VAKERS;
  public readonly stateKey: StateKey<VakiModel> = makeStateKey(COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE.VAKERS);
}