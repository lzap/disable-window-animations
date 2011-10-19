const Main = imports.ui.main;

let oldShouldAnimate;

function init() {
    oldShouldAnimate = Main.wm._shouldAnimate;
}

function enable() {
    // monkey patch the should animate function in the wm
    Main.wm._shouldAnimate = function(actor) {
        return false;
    }
}

function disable() {
    Main.wm._shouldAnimate = oldShouldAnimate;
}

// Backwards compatability with 3.0.2
function main() {
    enable();
}

// vim:sw=4:ts=4:et:
