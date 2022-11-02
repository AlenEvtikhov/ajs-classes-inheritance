import Character from '../app';

test('Верный ввод', () => {
  const received = new Character('Ron', 'Bowman');
  const expected = {
    name: 'Ron',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 120,
    defence: 40,
  };
  received.health = 50;
  received.levelUp();

  expect(received).toEqual(expected);
});

test('Не верный ввод', () => {
  expect(() => new Character('R', 'Bowman')).toThrow();
});

test('Нулевое здоровье', () => {
  expect(() => {
    const received = new Character('Ron', 'Bowman');
    received.health = 0;
    received.levelUp();
  }).toThrow();
});