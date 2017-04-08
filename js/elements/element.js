/* ELEMENT MAIN TEMPLATE */
console.log("Element FRAME UI LOADED.");

let element = {
  type: "h1",
  classes: ["element"],
  id: "",
  elements: [],
  content: "Hello world",
  construct: function() {
    let res = "<" + this.type + " class='";
    for (let cl of this.classes) {
      res += cl + " ";
    }
    res += "' id='" + this.id + "'>" + this.content + "</" + this.type + ">";
    return res;
  }
};
