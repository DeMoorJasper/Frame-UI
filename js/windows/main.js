/* AN EXAMPLE OF A MAIN WINDOW */
console.log("FrameUI: Main window loaded.");

frameui.mainwindow = {
  containers: [],
  construct: function() {
    let res = "";
    for (let c of this.containers) {
      res += c.construct();
    }
    return res;
  }
};
