// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrlAPI: 'https://rickandmortyapi.com/api/character/',
  firebase:{
    apiKey: "AIzaSyB68h0w7_9lIl1U7xXTGdEGMPwskm1TgCI",
    authDomain: "rickymortyproyect.firebaseapp.com",
    databaseURL: "https://rickymortyproyect.firebaseio.com",
    projectId: "rickymortyproyect",
    storageBucket: "rickymortyproyect.appspot.com",
    messagingSenderId: "586729141816",
    appId: "1:586729141816:web:c6a16c932787af50bf98cd",
    measurementId: "G-EWVWS9GMQP"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
