// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:"http://localhost:60710/api/Users",
  apiEmail:"http://localhost:60710/api/Email",
  firebase:{
    apiKey: "AIzaSyAl5r6sWN10V-mzHev6GVwaddh82PDrmLw",
    authDomain: "baby-4428e.firebaseapp.com",
    databaseURL: "https://baby-4428e.firebaseio.com",
    projectId: "baby-4428e",
    storageBucket: "baby-4428e.appspot.com",
    messagingSenderId: "384652436267",
    appId: "1:384652436267:web:0d96306e91f58e8db8db6e",
    measurementId: "G-28XQS1RLSZ"
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
