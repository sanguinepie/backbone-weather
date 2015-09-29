define([ 'jquery', 'underscore', 'backbone', 'baseView' ], function($, _, Backbone, Baseview) {
    var alertsView = Baseview.extend({

        el: "#alertsView",

        template: _.template($("#alertsView-template").html()),

        initialize: function() {
            this.render();
        },
        events: {
                    'click': 'showHideAlert'
                },
        showHideAlert: function() {
                                 console.log("show hide");
                             }
    });
    return alertsView;
});
