console.log("FrameUI User: Block loaded.");

{
  frameui.block = container();
  let prop = Object.create(property);
  prop.name = "class";
  prop.value = "block";
  frameui.block.properties.addProperty(prop);
}
