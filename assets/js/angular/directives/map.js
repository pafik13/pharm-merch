(function() {
  'use strict';

  angular
    .module('App')
    .directive('map', map);

  function map(){
    var directive = {
      restrict:'E',
      scope:{
        data: "=",
        show: "=",
        change: "&",
      },
      templateUrl: '/templates/map.html',
      controller: MapController,
    };

    return directive;
  };

  MapController.$inject = ['$scope', '$element', '$attrs'];

  function MapController($scope, $element, $attrs){
        $scope.show_map = false;
        $scope.latlng = {};
        $scope.autocompmap = {};
        $scope.input = {};
        $scope.geocoder = {};

        function initMap(){
          //https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
            $scope.latlng;
        $scope.autocompmap;
        $scope.input =  $element[0].querySelector('input#autocomp');
        var val = $scope.input.value;
        $scope.geocoder = new google.maps.Geocoder();
        var geoQuery = { 'address': val, 'partialmatch': true};
        //first position
        $scope.geocoder.geocode( geoQuery, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {

            $scope.latlng = results[0].geometry.location;
            $scope.autocompmap.setCenter($scope.latlng);
            marker.setPosition($scope.latlng);
            marker.setVisible(true);
            } else {
              alert(status);
            }
        });

        var mapOptions = {
          center:  $scope.latlng,
          scrollWheel: false,
          zoom: 17
        };

        //autocompmap = new google.maps.Map(document.getElementById("autocomp_map"), mapOptions);
        $scope.autocompmap = new google.maps.Map( $element[0].querySelector('div#autocomp_map'), mapOptions);
        var autocomplete = new google.maps.places.Autocomplete($scope.input);
        autocomplete.bindTo('bounds', $scope.autocompmap);

        var marker = new google.maps.Marker({
            map: $scope.autocompmap,
            anchorPoint: $scope.latlng
          });

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
          var place = autocomplete.getPlace();
        if (!place.geometry) {
          var geoQuery = { 'address': val, 'partialmatch': true};
          $scope.geocoder.geocode( geoQuery , function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              $scope.latlng = results[0].geometry.location;
              marker.setPosition($scope.latlng);
              marker.setVisible(true);
              $scope.autocompmap.setCenter($scope.latlng);
                $scope.autocompmap.setZoom(17);
                $scope.$apply(function(){
                  $scope.data.latitude = $scope.latlng.lat();
                  $scope.data.longitude = $scope.latlng.lng();
                  $scope.data.place = results[0];
                });
              } else {
                  alert(status);
              }
            });
          return;
        } else {
          $scope.latlng = place.geometry.location;
          marker.setPosition($scope.latlng);
          marker.setVisible(true);
          $scope.autocompmap.setCenter($scope.latlng);
            $scope.autocompmap.setZoom(17);
            $scope.$apply(function(){
              $scope.data.latitude = $scope.latlng.lat();
              $scope.data.longitude = $scope.latlng.lng();
              $scope.data.place = place;
          });
        }
        });

        };

        $scope.$watch('show',function(){
          //signal for hide map
          //console.log($scope.show);
            $scope.show_map = false;

        });


        $scope.$watch('show_map', function(oldValue,newValue){
          console.log('showing map '+ $scope.show);
          if($scope.show_map)
          {
            //console.log('init map');
            initMap();
            window.setTimeout(function(){
            google.maps.event.trigger($scope.autocompmap, 'resize');
                    },100);
          }
          else
          {
            $scope.latlng = {};
            $scope.autocompmap = {};
            $scope.input = {};
            $scope.geocoder = {};
          }
        });

  }
})();