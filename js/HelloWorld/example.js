/* EXAMPLE OF FRAMEUI CORE */
console.log("FrameUI User: Example loaded.");

function init() {
  let main = document.querySelector("#frameui");

  /* FILL THE CONTAINER */
  frameui.block.elements.push(frameui.h1);

  /* FILL THE NAV */
  frameui.nav.elements.push(frameui.ul);
  let items = ["item1", "item2", "item3"];
  for (let s of items) {
    frameui["nav" + s] = Object.create(frameui.navitem);
    frameui["nav" + s].content = s;
    frameui.ul.elements.push(frameui["nav" + s]);
  }

  /* BUILD THE WINDOW */
  frameui.mainwindow.containers.push(frameui.nav);
  frameui.mainwindow.containers.push(frameui.block);

  console.log(frameui);

  main.innerHTML = frameui.mainwindow.construct();
}
