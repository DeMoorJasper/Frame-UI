const ROOT_DIR = "./js/FrameUI/";
/* THIS CONTAINS ALL USED CONTAINERS, ELEMENTS AND WINDOWS */
let frameui = {};

let loadUserElements = function() {
  let userdir = "./js/HelloWorld/";

  /* EXECUTE THIS AT THE END */
  let start = function() {
    require([userdir + 'example'], function() {
      init();
    });
  };
  /* ==================== */

  require([userdir + 'windows/main'], function() {
    require([userdir + 'containers/block'], function() {
      require([userdir + 'containers/nav'], function() {
        require([userdir + 'elements/navitem'], function() {
          require([userdir + 'containers/ul'], function() {
            require([userdir + 'elements/h1'], function() {
              start();
            });
          });
        });
      });
    });
  });
};

document.addEventListener("DOMContentLoaded", function(event) {
  /* LOADS ALL CORE OBJECTS */
  require([ROOT_DIR + 'property'], function() {
    require([ROOT_DIR + 'properties'], function() {
      require([ROOT_DIR + 'container'], function() {
        require([ROOT_DIR + 'element'], function() {
          require([ROOT_DIR + 'uiwindow'], function() {
            /* LOAD USER DEFINED OBJECTS */
            loadUserElements();
          });
        });
      });
    });
  });
});
