#! /usr/bin/env node
var fs = require('fs');

var args = process.argv.splice(2);
var e2eDir = "./e2e";
var defaultTest = "./e2e/test.spec.js";
var defaultPage = "./e2e/test.page.js";
var testTemplate = fs.readFileSync(__dirname + "/template.js", "UTF-8");
var pageTemplate = fs.readFileSync(__dirname + "/template.page.js", "UTF-8");

switch(args[0]) {
  case "init":
    if(!fs.existsSync(e2eDir)) {
      fs.mkdirSync(e2eDir);
    }

    fs.writeFileSync(defaultTest, testTemplate);
    fs.writeFileSync(defaultPage, pageTemplate);

    console.log("initialize");
    break;
  case "add":
    console.log("add new spec file");
    var specFile = e2eDir + "/test.spec.js";

    if(!fs.existsSync(e2eDir)) {
      fs.mkdirSync(e2eDir);
    }

    if(fs.existsSync(specFile)) {
      fs.writeFileSync("./e2e/test2.spec.js", testTemplate);
      fs.writeFileSync("./e2e/test2.page.js", pageTemplate);
    }
    else {
      fs.writeFileSync(defaultTest, testTemplate);
      fs.writeFileSync(defaultPage, pageTemplate);
    }

    if(args[1]) {
      console.log("...with name " + args[1]);
      var testName = args[1];
      var testFile = e2eDir + "/" + testName + ".spec.js";
      var testPage = e2eDir + "/" + testName + ".page.js";
      
      if(!fs.existsSync(testFile)) {
        fs.writeFileSync(testFile, testTemplate);
      }

      if(!fs.existsSync(testPage)) {
        fs.writeFileSync(testPage, pageTemplate);
      }
    }

    break;
}