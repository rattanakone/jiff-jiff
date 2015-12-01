'use strict';

/**
 * @ngdoc function
 * @name jiffJiffApp.controller:RandomCtrl
 * @description
 * # RandomCtrl
 * Controller of the jiffJiffApp
 */
angular.module('jiffJiffApp')
  .controller('RandomCtrl', function ($scope, jiffAPI, $sce, $localStorage, $timeout) {
    var copyRandomIndex = 0;
    $scope.videos = jiffAPI.query();
  	$scope.getRandomVideo = function () {
  		var randomIndex = Math.floor(Math.random()*50) +1;
  		var embedCode = '<iframe ng-if="currentVideo" width="580" height="350" src="https://www.youtube.com/embed/' + $scope.videos.items[randomIndex].id.videoId + '" frameborder="0" allowfullscreen></iframe>';
  		$scope.currentVideo = $sce.trustAsHtml(embedCode);
  		console.log("set current video to: " + $scope.currentVideo);
      console.log($scope.videos.items[randomIndex].id.videoId);
      copyRandomIndex = randomIndex;

  	};

  	$scope.saveVideo = function(video){
    var videoData = {
    	'items': video.items[copyRandomIndex].id.videoId,
      'title': video.items[copyRandomIndex].snippet.title,
      'thumbnail': video.items[copyRandomIndex].snippet.thumbnails.high.url
    };
    if (!$localStorage.savedVideos){
        $localStorage.savedVideos = [videoData];
        // displays message when first video is saved for the first time
         $scope.videoSaved = {
                'success': true
            };
          // 2 seconds loading delay for success when first video is saved
            $timeout(function() {

              // show message for 3 more seconds for success when first video is saved
              $timeout(function() {
                $scope.videoSaved = false;
              }, 3000);
            }, 2000);
    } else {
        // We have already saved some videos. 
        // Check to make sure we haven't already saved the current video.
        var save = true; // Initialize the save decision variable.
        // Use this loop to check if we've already saved the video.
        for (var i=0; i < $localStorage.savedVideos.length; i++){
            if ($localStorage.savedVideos[i].items === videoData.items) {
                // This is a duplicate, so don't save (variable set to false).
                save = false;
            }
        }
        if (save===true){
            $localStorage.savedVideos.push(videoData);
            // Add object to trigger messages
            $scope.videoSaved = {
                'success': true
            };

            // 2 seconds loading delay for success
            $timeout(function() {

              // show message for 3 more seconds for success
              $timeout(function() {
                $scope.videoSaved = false;
              }, 3000);
            }, 2000);

        } else {
            console.log('video already saved');
            // Add object to trigger messages
            $scope.videoSaved = {
                'duplicate': true
            };

            // 2 seconds loading delay for duplicate
            $timeout(function() {

              // show message for 3 more seconds for duplicate 
              $timeout(function() {
                $scope.videoSaved = false;
              }, 3000);
            }, 2000);
        }
    }
};
  
  });