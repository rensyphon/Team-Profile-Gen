const Engineer = require('../lib/Engineer');

test('tests that each constructor parameter returns appropriately', () => {
  const engineer = new Engineer('Bob', 13, 'bob@email.com', 'bob99')
  expect(engineer.name).toBe('Bob');
  expect(engineer.id).toBe(13);
  expect(engineer.email).toBe('bob@email.com');
  expect(engineer.github).toBe('bob99');
});

test('tests getGithub() returns Github username', () => {
    const engineer = new Engineer('David', 24, 'david@email.com', 'david2000')
    expect(engineer.getGithub()).toBe('david2000');
})

test('tests getRole() returns role', () => {
    const engineer = new Engineer('David', 24, 'david@email.com', 'david2000')   
    expect(engineer.getRole()).toBe('Engineer');
});