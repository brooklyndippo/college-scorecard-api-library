/* eslint-disable no-undef */
const CollegeScorecard = require('../src/getSchool')

const apiKey = 'Ut5BZyyIh31isIltEa29VVarPuct43jHaxEYj1TB'
const cs = new CollegeScorecard(apiKey)

// CORRECT FORMATTING TESTS

test('Harvard search returns correct data', async () => {
  const data = await cs.getSchoolByName('Harvard')
  expect(data).toEqual(
    [
        {
          id: 0,
          name: 'Harvard University',
          city: 'Cambridge',
          state: 'MA',
          zip: '02138',
          website: 'www.harvard.edu/'
        }
    ]
  );
});

// TESTS TO CATCH ERRORS

test('Empty search returns null', async () => {
    const data = await cs.getSchoolByName('')
    expect(data).toBe(null)
});

test('Nonsense search returns null', async () => {
    const data = await cs.getSchoolByName('alksjdflasjdf')
    expect(data).toBe(null)
});

