define([ 'jquery', 'underscore', 'backbone', 'baseView' ], function($, _, Backbone, Baseview) {
    var astronomyView = Baseview.extend({

        el: "#astronomyView",

        template: _.template($("#astronomyView-template").html()),

        initialize: function() {
            this.render();
        }
    });
    return astronomyView;
});
