const Intern = require('../lib/Intern')

// confirm the right school attribute is set when creating a new intern
test('Setting a School', () => {
    const intern = new Intern('Bob', '2', 'bob@mail.com', 'Smith University')
    expect(intern.school).toBe('Smith University')
})

// confirm the function works for getting the school attribute for an intern
test('Getting School', () => {
    const intern = new Intern('Bob', '2', 'bob@mail.com', 'Smith University')
    expect(intern.getSchool()).toBe('Smith University')
})

// confirm the role is returned for an intern
test('Getting role', () => {
    const intern = new Intern('Bob', '2', 'bob@mail.com', 'Smith University')
    expect(intern.getRole()).toBe('Intern')
})