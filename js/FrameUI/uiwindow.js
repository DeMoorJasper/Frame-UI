/* ui window constructor */
console.log("FrameUI: ui window constructor loaded.");

let uiwindow = function() {
  let win = {
    containers: [],
    construct: function() {
      let res = "";
      for (let c of this.containers) {
        res += c.construct();
      }
      return res;
    }
  };

  return win;
};
