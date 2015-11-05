'use strict';

/**
 * @ngdoc service
 * @name jiffJiffApp.jiffAPI
 * @description
 * # jiffAPI
 * Factory in the jiffJiffApp.
 */
angular.module('jiffJiffApp')
  .factory('jiffAPI', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&channelId=UCaHuy8vHUcLU4O68JNgcNiA&order=date&key=AIzaSyDZqbprMDMRgEyeJV3ink9cCfqzwpvs8xY', {}, {
      query: {
        method:'GET',
        params:{
        },
        isArray:false
      }
    });
   
  });
