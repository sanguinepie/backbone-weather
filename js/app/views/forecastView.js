define([ 'jquery', 'underscore', 'backbone', 'baseView' ], function($, _, Backbone, Baseview) {
    var forecastView = Baseview.extend({

        el: "#forecastView",

        template: _.template($("#forecastView-template").html()),

        initialize: function() {
            //_.bindAll(this, "render");
            this.render();
        },

        events: {
          'click .day_0': '_showDetails_day0',
          'click .day_1': '_showDetails_day1', 
          'click .day_2': '_showDetails_day2', 
          'click .day_3': '_showDetails_day3', 
          'click .day_4': '_showDetails_day4', 
          'click .day_5': '_showDetails_day5', 
          'click .day_6': '_showDetails_day6'
        },
        _showDetails_day0: function() {
          $("#day_1").hide();
          $("#day_2").hide();
          $(".hourly_day_0").hide();
        },
        _showDetails_day1: function() {
          $("#day_3").hide();
          $("#day_4").hide();
          $(".hourly_day_1").hide();
        },
        _showDetails_day2: function() {
          $("#day_5").hide();
          $("#day_6").hide();
          $(".hourly_day_2").hide();
        },
        _showDetails_day3: function() {
          $("#day_7").hide();
          $("#day_8").hide();
          $(".hourly_day_3").hide();
        },
        _showDetails_day4: function() {
          $("#day_9").hide();
          $("#day_10").hide();
          $(".hourly_day_4").hide();
        },
        _showDetails_day5: function() {
          $("#day_11").hide();
          $("#day_12").hide();
          $(".hourly_day_5").hide();
        },
        _showDetails_day6: function() {
          $("#day_13").hide();
          $("#day_14").hide();
          $(".hourly_day_6").hide();
        }
    });
    return forecastView;
});
