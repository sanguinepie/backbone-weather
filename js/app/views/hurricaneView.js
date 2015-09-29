define([ 'jquery', 'underscore', 'backbone', 'baseView' ], function($, _, Backbone, Baseview) {
    var hurricaneView = Baseview.extend({

        el: "#hurricaneView",

        template: _.template($("#hurricaneView-template").html()),

        initialize: function() {
            this.render();
        }
    });
    return hurricaneView;
});
