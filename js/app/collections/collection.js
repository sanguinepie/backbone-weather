define([ 'jquery', 'underscore', 'backbone', 'model' ], function($, _, Backbone, model) {
    var Collection = Backbone.Collection.extend({
        model: model,
        url: "http://api.wunderground.com/api/f4de0f94a19a7665/alerts/almanac/astronomy/conditions/currenthurricane/forecast/forecast10day/geolookup/history/hourly/hourly10day/radar/satellite/webcams/q/ny/brooklyn.json?callback=?"
    });
    return Collection;
});
