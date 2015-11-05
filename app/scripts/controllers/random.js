'use strict';

/**
 * @ngdoc function
 * @name jiffJiffApp.controller:RandomCtrl
 * @description
 * # RandomCtrl
 * Controller of the jiffJiffApp
 */
angular.module('jiffJiffApp')
  .controller('RandomCtrl', function ($scope, jiffAPI, $sce, $localStorage) {
    $scope.videos = jiffAPI.query();
  	$scope.getRandomVideo = function () {
  		var randomIndex = Math.floor(Math.random()*50) +1;
  		var embedCode = '<iframe ng-if="currentVideo" width="580" height="350" src="https://www.youtube.com/embed/' + $scope.videos.items[randomIndex].id.videoId + '" frameborder="0" allowfullscreen></iframe>';
  		$scope.currentVideo = $sce.trustAsHtml(embedCode);
  		console.log("set current video to: " + $scope.currentVideo);

  	};

  	$scope.saveVideo = function(video){
    var videoData = {
        'items': video.items,
        'id': video.id,
        'videoId': video.videoId,
        'snippet': video.snippet,
        'title': video.title
    };
    if (!$localStorage.savedVideos){
        $localStorage.savedVideos = [videoData];
    } else {
        // We have already saved some cities. 
        // Check to make sure we haven't already saved the current city.
        var save = true; // Initialize the save decision variable.
        // Use this loop to check if we've already saved the city.
        for (var i=0; i < $localStorage.savedVideos.length; i++){
            if ($localStorage.savedVideos[i].id == videoData.id) {
                // This is a duplicate, so don't save (variable set to false).
                save = false;
            }
        }
        if (save==true){
            $localStorage.savedVideos.push(videoData);
        } else {
            console.log('video already saved');
        }
    }
};
    
  });
