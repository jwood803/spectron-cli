CLI tool to help create and add [Spectron](http://electron.atom.io/spectron/) tests.

### Install
`npm install spectron-cli`

### Usage

#### Initialize Spectron tests
`spectron-cli init`

The `init` command does a couple of things:
- Creates an `e2e` directory, if it doesn't already exist.
- Creates a `test.spec.js` file with a Spectron test template.
- Creates a `test.page.js` file with a template to host properties and function.

#### Add Spectron test file
`spectron-cli add [test name]`

The `add` command adds a new spec file with the name of your choosing (default is `test.spec.js`).
