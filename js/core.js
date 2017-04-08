/* EXAMPLE OF FRAMEUI CORE */
console.log("FrameUI: Core loaded.");

function init() {
  let main = document.querySelector("#frameui");

  /* FILL THE CONTAINER */
  frameui.container.elements.push(frameui.element);

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
  frameui.mainwindow.containers.push(frameui.container);

  main.innerHTML = frameui.mainwindow.construct();

  console.log(frameui);
}
