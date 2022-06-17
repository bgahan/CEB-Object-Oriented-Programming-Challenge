const Engineer = require('../lib/Engineer')

// confirm the right github attribute is set when creating a new engineer
test('Setting a GitHub', () => {
    const engineer = new Engineer('Jane', '2', 'jane@mail.com', 'JaneGH')
    expect(engineer.github).toBe('JaneGH')
})

// confirm the function works for getting the github attribute for an engineer
test('Getting GitHub', () => {
    const engineer = new Engineer('Jane', '2', 'jane@mail.com', 'JaneGH')
    expect(engineer.getGithub()).toBe('JaneGH')
})

// confirm the role is returned for an engineer
test('Getting role', () => {
    const engineer = new Engineer('Jane', '2', 'jane@mail.com', 'JaneGH')
    expect(engineer.getRole()).toBe('Engineer')
})