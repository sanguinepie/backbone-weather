define([ 'jquery', 'underscore', 'backbone', 'baseView' ], function($, _, Backbone, Baseview) {
    var geolookupView = Baseview.extend({

        el: "#geolookupView",

        template: _.template($("#geolookupView-template").html()),

        initialize: function() {
            this.render();
        }
    });
    return geolookupView;
});
