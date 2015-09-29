define([ 'jquery', 'underscore', 'backbone', 'baseView' ], function($, _, Backbone, Baseview) {
    var almanacView = Baseview.extend({

        el: "#almanacView",

        template: _.template($("#almanacView-template").html()),

        initialize: function() {
            this.render();
        }
    });
    return almanacView;
});
