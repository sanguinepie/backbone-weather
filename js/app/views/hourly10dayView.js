define([ 'jquery', 'underscore', 'backbone', 'baseView' ], function($, _, Backbone, Baseview) {
    var hourly10dayView = Baseview.extend({

        el: "#hourly10dayView",

        template: _.template($("#hourly10dayView-template").html()),

        initialize: function() {
            this.render();
        }
    });
    return hourly10dayView;
});
