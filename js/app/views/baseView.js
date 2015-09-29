define(['jquery','underscore','backbone'], function($, _, Backbone) {
    var BaseView = Backbone.View.extend({
        render: function() {
                    var self = this;
                    self.$el.html(self.template(self.model.toJSON()));
                    return self;
                }
    });
    return BaseView;
});
