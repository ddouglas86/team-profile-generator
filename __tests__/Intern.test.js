const Intern = require('../lib/Intern');

test('Should create an object', () => {
    const testIntern = new Intern('Davey', 86, 'davey@test-email.test', 'Test School');

    expect(testIntern.school).toEqual(expect.any(String));
});

test('Should grab the school property', () => {
    const testIntern = new Intern('Davey', 86, 'davey@test-email.test', 'Test School');

    expect(testIntern.school).toEqual('DaveyGit');
});

test('should return the correct role', () => {
    const testIntern = new Intern('Davey', 86, 'davey@test-email.test', 'Test School');

    expect(testIntern.getRole()).toEqual('Intern');
});