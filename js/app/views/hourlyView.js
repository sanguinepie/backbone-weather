define([ 'jquery', 'underscore', 'backbone', 'baseView' ], function($, _, Backbone, Baseview) {
    var hourlyView = Baseview.extend({

        el: "#hourlyView",

        template: _.template($("#hourlyView-template").html()),

        initialize: function() {
            this.render();
        }
    });
    return hourlyView;
});
