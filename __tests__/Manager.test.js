const Manager = require('../lib/Manager');

test('Should create an object', () => {
    const testManager = new Manager('Davey', 86, 'davey@test-email.test', 1);

    expect(testManager.officeNumber).toEqual(expect.any(Number));
});

test('Should grab the school property', () => {
    const testManager = new Manager('Davey', 86, 'davey@test-email.test', 1);

    expect(testManager.school).toEqual(1);
});

test('should return the correct role', () => {
    const testManager = new Manager('Davey', 86, 'davey@test-email.test', 1);

    expect(testManager.getRole()).toEqual('Manager');
});