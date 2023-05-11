const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "AlexisJoyner";
    const employeeInstance = new Engineer("Alexis", 2, " Ajoyne2@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "AlexisJoyner";
    const employeeInstance = new Engineer("Alexis", 2, " Ajoyne2@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Alexis", 2, " Ajoyne2@gmail.com", "Alexis");
    expect(employeeInstance.getRole()).toBe(returnValue);
});