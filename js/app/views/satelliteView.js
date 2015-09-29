define([ 'jquery', 'underscore', 'backbone', 'baseView' ], function($, _, Backbone, Baseview) {
    var satelliteView = Baseview.extend({

        el: "#satelliteView",

        template: _.template($("#satelliteView-template").html()),

        initialize: function() {
            this.render();
        }
    });
    return satelliteView;
});
