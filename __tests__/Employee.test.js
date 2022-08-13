const Employee = require('../lib/Employee');

test('tests that each constructor parameter returns appropriately', () => {
  const employee = new Employee('Bob', 13, 'bob@email.com')
  expect(employee.name).toBe('Bob');
  expect(employee.id).toBe(13);
  expect(employee.email).toBe('bob@email.com');
});

test('tests getName() returns name', () => {
    const employee = new Employee('David', 24, 'david@email.com')
    expect(employee.getName()).toBe('David');
})

test('tests getId() returns id', () => {
    const employee = new Employee('David', 24, 'david@email.com')
    expect(employee.getId()).toBe(24);
})

test('tests getEmail() returns email', () => {
    const employee = new Employee('David', 24, 'david@email.com')
    expect(employee.getEmail()).toBe('david@email.com');
})

test('tests getRole() returns role', () => {
    const employee = new Employee('David', 24, 'david@email.com')   
    expect(employee.getRole()).toBe('Employee');
});