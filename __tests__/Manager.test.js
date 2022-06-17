const Manager = require('../lib/Manager')

// confirm the right office number attribute is set when creating a new manager
test('Setting an office number', () => {
    const manager = new Manager('Ally', '2', 'ally@mail.com', '101')
    expect(manager.officeNumber).toBe('101')
})

// confirm the function works for getting the office number attribute for a manager
test('Getting office number', () => {
    const manager = new Manager('Ally', '2', 'ally@mail.com', '101')
    expect(manager.getOfficeNumber()).toBe('101')
})

// confirm the role is returned for a manager
test('Getting role', () => {
    const manager = new Manager('Ally', '2', 'ally@mail.com', '101')
    expect(manager.getRole()).toBe('Manager')
})