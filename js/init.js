document.addEventListener("DOMContentLoaded", function(event) {
  /* LOADS ALL USED ELEMENTS AND CORE CLASS */
  require(['./js/containers/container'], function() {
    require(['./js/elements/element'], function() {
      /* KEEP THIS AT THE END */
      require(['./js/core'], function() {
        init();
      });
      /* ==================== */
    });
  });
});
