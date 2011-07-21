const Main = imports.ui.main;

function main() {
    // monkey patch the should animate function in the wm
    Main.wm._shouldAnimate = function(actor) {
        return false;
    }
}

// vim:sw=4:ts=4:et:
