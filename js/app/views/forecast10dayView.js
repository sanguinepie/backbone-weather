define([ 'jquery', 'underscore', 'backbone', 'baseView' ], function($, _, Backbone, Baseview) {
    var forecast10dayView = Baseview.extend({

        el: "#forecast10dayView",

        template: _.template($("#forecast10dayView-template").html()),

        initialize: function() {
            this.render();
        }
    });
    return forecast10dayView;
});
