/* Property constructor */
console.log("FrameUI: Property Constructor loaded.");

let property = {
  name: "",
  value: "",
  toString: function() {
    if (this.value.constructor === Array) {
      let res = this.name + "=" + "'";
      for (let s of this.value) {
        res += s + " ";
      }
      res += "' ";
      return res;
    } else if (typeof this.value == "string") {
      return this.name + "=" + "'" + this.value + "' ";
    } else {
      return "";
    }
  }
};
