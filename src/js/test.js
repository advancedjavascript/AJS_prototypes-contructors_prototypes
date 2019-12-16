import Character from './app';

test('name Lucky, type Swordsman, points = 10', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 94,
    name: 'Lucky',
    type: 'Swordsman',
  };

  const received = new Character('Lucky', 'Swordsman');
  received.damage(10);
  expect(received).toEqual(expected);
});

test('points = 200, character died', () => {
  const received = new Character('Lucky', 'Swordsman').damage(200);
  expect(received).toBe('You died');
});
