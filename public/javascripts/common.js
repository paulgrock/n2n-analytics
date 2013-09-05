require.config({
  baseUrl: '/javascripts',
  paths: {
    jquery: '../vendor/jquery/jquery',
    lodash: '../vendor/lodash/dist/lodash.compat',
    ember: '../vendor/ember/ember',
    requirejs: '../vendor/requirejs/require',
    handlebars: '../vendor/handlebars/handlebars',
    showdown: '../vendor/showdown/src/showdown',
    moment: '../vendor/moment/moment'
  },
  shim: {
    ember: {
      deps: [
        'jquery',
        'handlebars'
      ],
      exports: 'Ember'
    }
  }
});

//files to include on ALL client side paths
require([
  'ember'
], function (Ember) {
  'use strict';
});
