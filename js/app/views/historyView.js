define([ 'jquery', 'underscore', 'backbone', 'baseView' ], function($, _, Backbone, Baseview) {
    var historyView = Baseview.extend({

        el: "#historyView",

        template: _.template($("#historyView-template").html()),

        initialize: function() {
            this.render();
        }
    });
    return historyView;
});
