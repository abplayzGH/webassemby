
var exports;
WebAssembly.instantiateStreaming(
    fetch("streaming.wasm"), {}
).then(results => exports = results.instance.exports);

function sumOfNInts() {
    var a = document.querySelector("#a").value;
    var sum = exports.sumOfNInts(a);

    document.querySelector("#ret")
        .innerHTML += `${a} => ${sum}<br/>`;
}
function addInts() {
    var a = document.querySelector("#a").value;
    var b = document.querySelector("#b").value;

    var sum = exports.add(a,b);

    document.querySelector("#ret")
        .innerHTML += `${a} + ${b} => ${sum}<br/>`;
}
function subInts() {
    var a = document.querySelector("#a").value;
    var b = document.querySelector("#b").value;

    var sum = exports.sub(a,b);

    document.querySelector("#ret")
        .innerHTML += `${a} - ${b} => ${sum}<br/>`;
}
function mulInts() {
    var a = document.querySelector("#a").value;
    var b = document.querySelector("#b").value;

    var sum = exports.mul(a,b);

    document.querySelector("#ret")
        .innerHTML += `${a} * ${b} => ${sum}<br/>`;
}
function divInts() {
    var a = document.querySelector("#a").value;
    var b = document.querySelector("#b").value;

    var sum = exports.divide(a,b);

    document.querySelector("#ret")
        .innerHTML += `${a} / ${b} => ${sum}<br/>`;
}