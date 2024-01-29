var memory = new WebAssembly.Memory({
    initial: 256,
    maximum: 512
});

var exports;
WebAssembly.instantiateStreaming(fetch("main.wasm"), {
    js: {
        mem: memory
    }
}).then(results => {
    exports = results.instance.exports;
    memory = results.instance.exports.memory;
});

function run_wasm() {
    var arr = new Uint32Array(memory.buffer);
    for (var i = 0; i < 10; i++) {
        arr[i] = i * 2;
    }}
    var sum = exports.accumulate(0, 10);

    document.querySelector("#ret")
        .innerHTML += `${sum}<br>`;

function get_string() {
    var ptr = exports.getString();
    var bytes = new Uint8Array(memory.buffer, ptr);

    var str = new TextDecoder("utf8").decode(
        bytes.slice(0, 13)
    );
    console.log(str);
    }
