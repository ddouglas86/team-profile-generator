const Manager = require('../lib/Manager');

test('Should create an object', () => {
    const testManager = new Manager('Davey', 86, 'davey@test-email.test', 1);

    expect(testManager.name).toEqual(expect.any(String));
    expect(testManager.id).toEqual(expect.any(Number));
    expect(testManager.email).toEqual(expect.any(String));
    expect(testManager.officeNumber).toEqual(expect.any(Number));
});

test('Should grab the school property', () => {
    const testManager = new Manager('Davey', 86, 'davey@test-email.test', 1);

    expect(testManager.officeNumber).toEqual(expect.any(Number));
});

test('should return the correct role', () => {
    const testManager = new Manager('Davey', 86, 'davey@test-email.test', 1);

    expect(testManager.getRole()).toEqual('Manager');
});