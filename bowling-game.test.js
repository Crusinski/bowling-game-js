const bowlingGame = require('./bowling-game')

beforeEach(() => {
  bowlingGame.initialize()
});


test('Scores for all gutters is 0', () => {
  for (let i =0; i<20; i++)
    bowlingGame.roll(0)
  
  const score=bowlingGame.getScore()
  
  expect(score).toBe(0);
});

test('Score for all ones rolled is 20', () => {
  for (let i =0; i<20; i++)
    bowlingGame.roll(1)
  
  const score=bowlingGame.getScore()
  
  expect(score).toBe(20);
});

test('Score for one spare', () => {
  bowlingGame.roll(5)
  bowlingGame.roll(5)
  bowlingGame.roll(3)
  for (let i=0; i<17; i++)
    bowlingGame.roll(0)

    const score=bowlingGame.getScore()

    expect (score).toBe(16)
})

test('Score for one strike', () => {
  bowlingGame.roll(10)
  bowlingGame.roll(3)
  bowlingGame.roll(4)
  for (let i=0; i<17; i++)
    bowlingGame.roll(0)

    const score=bowlingGame.getScore()

    expect (score).toBe(24)
})

test('Score for perferct game', () => {
  for (let i=0; i<20; i++)
    bowlingGame.roll(20)

    const score=bowlingGame.getScore()

    expect (score).toBe(300)
})
