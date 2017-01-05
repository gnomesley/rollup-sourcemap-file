var rollup = require("rollup");
var json = require("rollup-plugin-json");

rollup.rollup({
    entry: "main.js",
    plugins: [json()]
}).then(function (bundle)
{
    bundle.write({
        format: "iife",
        moduleName: "test",
        sourceMap: true,
        dest: "out.js"
    });
});