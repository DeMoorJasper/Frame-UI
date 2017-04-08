const ROOT_DIR = "./js/FrameUI/";
/* THIS CONTAINS ALL USED CONTAINERS, ELEMENTS AND WINDOWS */
let frameui = {};

require.config({
    baseUrl: ROOT_DIR,
    paths: {
      /* Framework files - Dependancies */
      'FRAMEUIproperty': 'property',
      'FRAMEUIproperties': 'properties',
      'FRAMEUIcontainer': 'container',
      'FRAMEUIelement': 'element',
      'FRAMEUIwindow': 'uiwindow',
      /* User defined elements, containers and windows */
      'main': '../HelloWorld/windows/main',
      'block': '../HelloWorld/containers/block',
      'nav': '../HelloWorld/containers/nav',
      'navitem': '../HelloWorld/elements/navitem',
      'ul': '../HelloWorld/containers/ul',
      'h1': '../HelloWorld/elements/h1',
      /* init script */
      'example': '../HelloWorld/example',
    }
});

let loadUserElements = function() {
  /* UPDATE THIS WITH ALL NEW ELEMENTS YOU ADD */
  let userscripts = ['main', 'block', 'nav', 'navitem', 'ul', 'h1'];
  /* This script will be executed once all dependancies and elements all loaded */
  let initscript = "example";

  let start = function() {
    require([initscript], function() {
      init();
    });
  };
  require(userscripts, function() {
    start();
  });
};

document.addEventListener("DOMContentLoaded", function(event) {
  /* LOADS ALL CORE OBJECTS */
  require(['FRAMEUIproperty', 'FRAMEUIproperties', 'FRAMEUIcontainer', 'FRAMEUIelement', 'FRAMEUIwindow'], function() {
    /* LOAD USER DEFINED OBJECTS */
    loadUserElements();
  });
});
