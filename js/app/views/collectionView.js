define(['jquery', 'underscore', 'backbone', 'bootstrap', 'collection', 'alertsView', 'almanacView', 'astronomyView', 'conditionsView','hurricaneView', 'forecast10dayView', 'forecastView', 'geoView', 'historyView', 'hourly10dayView', 'hourlyView', 'satelliteView', 'webcamsView'],
        function($, _, Backbone, bootstrap, collection, alerts, almanac, astronomy, conditions, hurricane, forecast10day, forecast, geo, history, hourly10day, hourly, satellite, webcams) {
            var collectionView = Backbone.View.extend({
                initialize: function() {
                                this.listenTo(this.collection, "reset", this.render);
                                this.collection.fetch({ reset: true });
                                this.render();
                            },
            render: function() {
                        this.collection.each(function(model) {
                            new alerts ({
                                model: model 
                            });
                            new conditions ({
                                model: model 
                            });
                            new forecast ({
                                model: model 
                            });
                            new hourly ({
                                model: model 
                            });
                        }, this);
                    },
            });
            return collectionView;
        });
