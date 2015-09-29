define([ 'jquery', 'underscore', 'backbone', 'baseView' ], function($, _, Backbone, Baseview) {
    var webcamsView = Baseview.extend({

        el: "#webcamsView",

        template: _.template($("#webcamsView-template").html()),

        initialize: function() {
            this.render();
        }
    });
    return webcamsView;
});
