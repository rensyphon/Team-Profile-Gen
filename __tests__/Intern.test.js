const Intern = require('../lib/Intern');

test('tests that each constructor parameter returns appropriately', () => {
  const intern = new Intern('Bob', 13, 'bob@email.com', 'University of Arizona')
  expect(intern.name).toBe('Bob');
  expect(intern.id).toBe(13);
  expect(intern.email).toBe('bob@email.com');
  expect(intern.school).toBe('University of Arizona');
});

test('tests getSchool() returns school', () => {
    const intern = new Intern('David', 24, 'david@email.com', 'Stanford')
    expect(intern.getSchool()).toBe('Stanford');
})

test('tests getRole() returns role', () => {
    const intern = new Intern('David', 24, 'david@email.com', 'Stanford')   
    expect(intern.getRole()).toBe('Intern');
});