import { FirebaseOptions } from '@angular/fire';

/**
 * [Firebase de Google documentación](https://firebase.google.com/docs)
 */
export const FIREBASE_GOOGLE: FirebaseOptions = {
  /**
   * [AngularFire configuración](https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md)
   */
  apiKey: "AIzaSyCva16AEvR_u_BsXwXGThB2t7D78ifs6qo",
  authDomain: "vaki-challenge-application.firebaseapp.com",
  projectId: "vaki-challenge-application",
  storageBucket: "vaki-challenge-application.appspot.com",
  messagingSenderId: "473750078067",
  appId: "1:473750078067:web:7d09e7e3f6c1e9799a2006"
};

export enum COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE {
  VAKERS = "vakers"
};