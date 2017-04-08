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
        start();
      });
    });
  });
});
