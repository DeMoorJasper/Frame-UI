/* THIS CONTAINS ALL USED CONTAINERS, ELEMENTS AND WINDOWS */
let frameui = {};

/* EXECUTE THIS AT THE END */
let start = function() {
  require(['./js/core'], function() {
    init();
  });
};
/* ==================== */

document.addEventListener("DOMContentLoaded", function(event) {
  /* LOADS ALL USED ELEMENTS AND CORE CLASS */
  require(['./js/containers/container'], function() {
    require(['./js/elements/element'], function() {
      require(['./js/windows/main'], function() {
        require(['./js/containers/nav'], function() {
          require(['./js/elements/navitem'], function() {
            require(['./js/containers/ul'], function() {
              start();
            });
          });
        });
      });
    });
  });
});
