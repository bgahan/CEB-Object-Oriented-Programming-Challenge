const Employee = require('../lib/Employee')

// confirm that an object is created when creating a new employee
test('Is an object', () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe('object')
})

// confirm the right attributes are set when creating a new employee
test('Setting a name', () => {
    const employee = new Employee('Carl')
    expect(employee.name).toBe('Carl')
})

test('Setting an ID', () => {
    const employee = new Employee('Carl', '2')
    expect(employee.id).toBe('2')
})

test('Setting an email', () => {
    const employee = new Employee('Carl', '2', 'carl@mail.com')
    expect(employee.email).toBe('carl@mail.com')
})

// confirm the functions work for getting attributes for an employee
test('Getting name', () => {
    const employee = new Employee('Carl')
    expect(employee.getName()).toBe('Carl')
})

test('Getting ID', () => {
    const employee = new Employee('Carl', '2')
    expect(employee.getId()).toBe('2')
})

test('Getting Email', () => {
    const employee = new Employee('Carl', '2', 'carl@mail.com')
    expect(employee.getEmail()).toBe('carl@mail.com')
})

// confirm the role is returned for an employee
test('Getting role', () => {
    const employee = new Employee('Carl', '2', 'carl@mail.com')
    expect(employee.getRole()).toBe('Employee')
})

