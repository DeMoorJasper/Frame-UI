console.log("FrameUI: Core loaded.");

function init() {
  let main = document.querySelector("#frameui");

  container.elements.push(element);
  mainwindow.containers.push(container);

  main.innerHTML = mainwindow.construct();
}
