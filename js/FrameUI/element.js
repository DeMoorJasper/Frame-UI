/* ELEMENT MAIN TEMPLATE */
console.log("FrameUI: Element loaded.");

let element = function() {
  let el = {
    type: "p",
    properties : Object.create(properties),
    content: "Hello world",
    construct: function() {
      let res = "<" + this.type + " ";
      res += this.properties.toString();
      res += ">" + this.content + "</" + this.type + ">";
      return res;
    }
  };

  return el;
};
