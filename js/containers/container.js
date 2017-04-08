/* CONTAINER MAIN TEMPLATE */
console.log("FrameUI: Container loaded.");

let container = {
  type: "div",
  classes: ["block"],
  id: "",
  elements: [],
  getContent: function() {
    let res = "";
    for (let el of this.elements) {
      res += el.construct();
    }
    return res;
  },
  construct: function() {
    let res = "<" + this.type + " class='";
    for (let cl of this.classes) {
      res += cl + " ";
    }
    res += "' id='" + this.id + "'>" + this.getContent() + "</" + this.type + ">";
    return res;
  }
};
