/* CONTAINER MAIN TEMPLATE */
console.log("Container FRAME UI LOADED.");

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

    console.log(res);

    return res;
  }
};
