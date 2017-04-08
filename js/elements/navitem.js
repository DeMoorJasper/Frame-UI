console.log("FrameUI: Nav item loaded.");

frameui.navitem = {
  type: "li",
  classes: [""],
  id: "",
  elements: [],
  content: "",
  construct: function() {
    let res = "<" + this.type + " class='";
    for (let cl of this.classes) {
      res += cl + " ";
    }
    res += "' id='" + this.id + "'>" + this.content + "</" + this.type + ">";
    return res;
  }
};
