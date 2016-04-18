(function() {
  'use strict';

  angular
    .module('App')
    .controller('MainController', MainController);

    MainController.inject = ['$filter', 'dataService', 'morris'];

    function MainController($filter, dataService, morris) {
      var mainCntrl = this;

      activate();

      function activate() {
        var config = {
          params: {
            limit: 500,
          },
        };

        dataService.getList('Tradenet', config)
          .then(function(data) {
            mainCntrl.tradenets = {
              data : data,
              loaded : true
            };
            return mainCntrl.tradenets;
          });

        dataService.getList('Pharmacy', config)
          .then(function(data) {
            mainCntrl.pharmacies = {
              data : data,
              loaded : true
            };
            return mainCntrl.pharmacies;
          });

        dataService.getList('Merchant', config)
          .then(function(data) {
            mainCntrl.merchants = {
              data : data,
              loaded : true
            };
            return mainCntrl.merchants;
          });

        dataService.getList('Drug', config)
          .then(function(data) {
            mainCntrl.drugs = {
              data : data,
              loaded : true
            };
            return mainCntrl.drugs;
          });

         config.params = {
           report : 12
         };
         dataService.getList('Report/Generate', config)
          .then(function(data) {
            // Area Chart
            morris.Area({
                element: 'morris-area-chart',
                data: data,
                xkey: 'att_date',
                ykeys: ['att_ph_cnt', 'att_cnt', 'att_claim_cnt'],
                labels: ['Кол-во фото', 'Кол-во визитов', 'Кол-во актов'],
                pointSize: 2,
                hideHover: 'auto',
                resize: true,
                xLabelFormat: function(d) { return $filter('date')(d, 'dd.MM.yy'); },
                dateFormat: function (d) { return $filter('date')(d, 'dd.MM.yy'); },
            });

            return data;
          });
      };
    }
})();