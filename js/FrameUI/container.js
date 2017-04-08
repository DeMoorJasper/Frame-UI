/* Container constructor */
console.log("FrameUI: Container constructor loaded.");

let container = function() {
  let con = {
    type: "div",
    properties : Object.create(properties),
    elements: [],
    getContent: function() {
      let res = "";
      for (let el of this.elements) {
        if (el !== undefined) {
          res += el.construct();
        } else {
          console.log("FrameUI ERROR: Undefined element in container");
        }
      }
      return res;
    },
    construct: function() {
      let res = "<" + this.type + " ";
      res += this.properties.toString();
      res += ">" + this.getContent() + "</" + this.type + ">";
      return res;
    }
  };
  return con;
};
