// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiEndpoint: 'http://ec2-18-222-34-118.us-east-2.compute.amazonaws.com/api/v1/',
  awsPoolId: 'us-east-2:c7b15228-9bf0-472f-913c-0978744985c5',
  awsRegion: 'us-east-2',
  awsEndpoint: 'https://mwa2019.us-east-2.amazonaws.com/',
  awsBucket: 'mwa2019',
  awsFolder: 'images'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
