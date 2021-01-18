import { ConfigInterface } from "./interfaces";

declare function require(moduleName: string): any;
const { version, homepage } = require("../../../../package.json");

export const CONFIG: ConfigInterface = {
  version: version,
  homepage: homepage,
  services: {
    google: {
      /**
       * [Firebase de Google documentación](https://firebase.google.com/docs)
       */
      firebase: {
        /**
         * [AngularFire configuración](https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md)
         */
        apiKey: "AIzaSyBBjDOh2l9KPNvcBkoD5ONZVs30Vatda2Y",
        authDomain: "vaki-challenge-2021.firebaseapp.com",
        // databaseURL: "https://project-2997275986633744204.firebaseio.com",
        projectId: "vaki-challenge-2021",
        storageBucket: "vaki-challenge-2021.appspot.com",
        messagingSenderId: "465464215288",
        appId: "1:465464215288:web:aae17c08bdde3382f29d0d",
        measurementId: '<your-measurement-id>'
      }
    }
  }
};