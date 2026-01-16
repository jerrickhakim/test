// Test file for parseFileAST tool

const testVariable = "This is a test variable";

function testFunction(param1, param2) {
  console.log("This is a test function");
  return param1 + param2;
}

class TestClass {
  constructor(name) {
    this.name = name;
  }

  testMethod() {
    return `Hello, ${this.name}!`;
  }
}

const anotherVariable = 42;

export function exportedFunction() {
  return "Exported function test";
}

export class ExportedClass {
  test() {
    return "Exported class test";
  }
}