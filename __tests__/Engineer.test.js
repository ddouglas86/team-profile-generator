const Engineer = require('../lib/Engineer');

test('Should create an object', () => {
    const testEngineer = new Engineer('Davey', 86, 'davey@test-email.test', 'DaveyGit');

    expect(testEngineer.name).toEqual(expect.any(String));
    expect(testEngineer.id).toEqual(expect.any(Number));
    expect(testEngineer.email).toEqual(expect.any(String));
    expect(testEngineer.github).toEqual(expect.any(String));
});

test('Should grab the github property', () => {
    const testEngineer = new Engineer('Davey', 86, 'davey@test-email.test', 'DaveyGit');

    expect(testEngineer.github).toEqual('DaveyGit');
});

test('should return the correct role', () => {
    const testEmployee = new Engineer('Davey', 86, 'davey@test-email.test', 'DaveyGit');

    expect(testEmployee.getRole()).toEqual('Engineer');
});