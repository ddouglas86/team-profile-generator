const Employee = require('../lib/Employee');

test('should create an object', () => {
    const testEmployee = new Employee('Davey', 86, 'davey@test-email.test');

    expect(testEmployee.name).toEqual(expect.any(String));
    expect(testEmployee.id).toEqual(expect.any(Number));
    expect(testEmployee.email).toEqual(expect.any(String));
});

test('should grab just the name', () => {
    const testEmployee = new Employee('Davey', 86, 'davey@test-email.test');

    expect(testEmployee.getName()).toEqual('Davey');
});

test('should grab just the id', () => {
    const testEmployee = new Employee('Davey', 86, 'davey@test-email.test');

    expect(testEmployee.getId()).toEqual(86);
});

test('should grab just the email', () => {
    const testEmployee = new Employee('Davey', 86, 'davey@test-email.test');

    expect(testEmployee.getEmail()).toEqual('davey@test-email.test');
});

test('should return the correct role', () => {
    const testEmployee = new Employee('Davey', 86, 'davey@test-email.test');

    expect(testEmployee.getRole()).toEqual('Employee');
});