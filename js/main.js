require.config ({
    baseURL: 'js',
    paths: {
        app: 'app',
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        /* models */
        model : 'app/models/model',
        /* views */
        alertsView: 'app/views/alertsView',
        almanacView: 'app/views/almanacView',
        astronomyView: 'app/views/astronomyView',
        conditionsView: 'app/views/conditionsView',
        forecastView: 'app/views/forecastView',
        forecast10dayView: 'app/views/forecast10dayView',
        geoView: 'app/views/geolookupView',
        historyView: 'app/views/historyView',
        hourlyView: 'app/views/hourlyView',
        hourly10dayView: 'app/views/hourly10dayView',
        hurricaneView: 'app/views/hurricaneView',
        satelliteView: 'app/views/satelliteView',
        searchView: 'app/views/searchView',
        webcamsView: "app/views/webcamsView",
        yesterdayView: "app/views/yesterdayView",
        baseView: 'app/views/baseView',
        collectionView: 'app/views/collectionView',
        /* collections */
        collection: 'app/collections/collection',
        /* routers */
        router: 'app/routers/router'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: [ 'underscore', 'jquery' ],
        exports: 'Backbone'
      },
      localStorage: {
        deps: [ 'backbone' ]
      }
    }
});

define(['collectionView', 'collection'], function(view, collection) {
  $(function() {
    new view({
      collection: new collection 
    });
  });
});


