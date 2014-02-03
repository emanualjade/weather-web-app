define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, backbone){
  var Router = backbone.Router.extend({
    
    routes: {
      '': 'goToDash',
      'dash': 'goToDash',
      'dash/:place': 'goToDash',
      'about': 'goToAbout'
    },

    initialize: function(view){
      this.appView = view;
    },

    goToDash: function(place){
      this.appView.setPage('dash');
      if(place){
        alert('Weather detail for ' + place);
      }
    },

    goToAbout: function(){
      this.appView.setPage('about');
    }

  });

  return Router;
})