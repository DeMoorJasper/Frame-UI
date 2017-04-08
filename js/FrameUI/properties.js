/* Property constructor */
console.log("FrameUI: Property Constructor loaded.");

let properties = {
  properties: null,
  addProperty: function(prop) {
    if (this.properties === null) {
      this.properties = [prop];
    } else {
      this.properties.push(prop);
    }
  },
  toString: function() {
    if (this.properties === null) {
      return "";
    }
    let res = "";
    for (let p of this.properties) {
      res += p.toString() + " ";
    }
    return res;
  }
};
