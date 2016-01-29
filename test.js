var slm = require("./lib/slm.js");

function handleCompile(contents) {
    console.log(slm.compile(contents)());
}

handleCompile("a Home");

handleCompile("a [routerLink]='[\"Home\"]' Home");
