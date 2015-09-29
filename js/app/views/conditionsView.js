define([ 'jquery', 'underscore', 'backbone', 'baseView' ], function($, _, Backbone, Baseview) {
    var ConditionsView = Baseview.extend({

        el: "#conditionsView",

        template: _.template($("#conditionsView-template").html()),

        initialize: function() {
            this.render();
        }
    });
    return ConditionsView;
});
