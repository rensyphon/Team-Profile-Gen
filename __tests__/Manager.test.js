const Manager = require('../lib/Manager');

test('tests that each constructor parameter returns appropriately', () => {
  const manager = new Manager('Bob', 13, 'bob@email.com', '6085')
  expect(manager.name).toBe('Bob');
  expect(manager.id).toBe(13);
  expect(manager.email).toBe('bob@email.com');
  expect(manager.officeNumber).toBe('6085');
});

test('tests getOfficeNumber() returns office number', () => {
    const manager = new Manager('David', 24, 'david@email.com', '9912')
    expect(manager.getOfficeNumber()).toBe('9912');
})

test('tests getRole() returns role', () => {
    const manager = new Manager('David', 24, 'david@email.com', '9912')   
    expect(manager.getRole()).toBe('Manager');
});