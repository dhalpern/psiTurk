// Generated by CoffeeScript 1.6.3
require.config({
  paths: {
    jquery: "libs/jquery",
    underscore: "libs/underscore",
    backbone: "libs/backbone",
    text: "libs/text",
    cs: "libs/cs",
    bootstrap: "libs/bootstrap",
    dropdown: "libs/bootstrap-dropdown",
    collapse: "libs/bootstrap-collapse",
    nod: "libs/nod",
    dotimeout: "libs/jquery.dotimeout.min"
  },
  shim: {
    bootstrap: ["jquery"],
    dropdown: ["bootstrap"],
    collapse: ["bootstrap"],
    nod: ["jquery"],
    dotimeout: ["jquery"],
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    underscore: {
      exports: "_"
    }
  }
});

require(["jquery", "app", "bootstrap", "dropdown", "collapse", "dotimeout", "nod"], function($, App, Bootstrap, dropdown) {
  return App.initialize();
});
