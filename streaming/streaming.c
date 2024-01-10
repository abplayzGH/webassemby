#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int sumOfNInts(int n) {
    return n * (n + 1) / 2;
}

EMSCRIPTEN_KEEPALIVE
int addInts(int a ,int b) {
    return a + b;
}