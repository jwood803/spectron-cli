#! /usr/bin/env node
var fs = require('fs');

var args = process.argv.splice(2);
var e2eDir = "./e2e";
var defaultTest = "./e2e/test.spec.js";

switch(args[0]) {
  case "init":
    if(!fs.existsSync(e2eDir)) {
      fs.mkdirSync(e2eDir);
    }

    console.log(process.cwd());
    console.log(__dirname);

    var template = fs.readFileSync(__dirname + "/template.js", "UTF-8");

    fs.writeFileSync(defaultTest, template);

    console.log("initialize");
    break;
  case "add":
    console.log("add new spec file");

    // Add default spec file - test.spec.js (check if file already 
    // exists and change to test2.spec.js if it does)

    if(args[1]) {
      console.log("...with name " + args[1]);

      // Add spec file with specified name
    }

    break;
}