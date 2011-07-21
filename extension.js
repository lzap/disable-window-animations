const St = imports.gi.St;
const Mainloop = imports.mainloop;

const Main = imports.ui.main;

function main() {
  // monkey patch the should animate function in the wm
  Main.wm._shouldAnimate = function(actor) {
    return false;
  }
}
