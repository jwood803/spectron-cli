#! /usr/bin/env node
var args = process.argv.splice(2);

switch(args[0]) {
  case "init":
    console.log("initialize");
    break;
  case "add":
    console.log("add new spec file");

    if(args[1]) {
      console.log("...with name " + args[1]);
    }

    break;
}