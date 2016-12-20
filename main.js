#! /usr/bin/env node
var fs = require('fs');

var args = process.argv.splice(2);
var e2eDir = "./e2e";
var defaultTest = "./e2e/test.spec.js";
var defaultPage = "./e2e/test.page.js";

switch(args[0]) {
  case "init":
    if(!fs.existsSync(e2eDir)) {
      fs.mkdirSync(e2eDir);
    }

    var testTemplate = fs.readFileSync(__dirname + "/template.js", "UTF-8");
    var pageTemplate = fs.readFileSync(__dirname + "/template.page.js", "UTF-8");

    fs.writeFileSync(defaultTest, testTemplate);
    fs.writeFileSync(defaultPage, pageTemplate);

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