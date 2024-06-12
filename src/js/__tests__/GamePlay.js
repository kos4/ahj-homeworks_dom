import GamePlay from "../classes/GamePlay";

test('GamePlay', () => {
  const game = new GamePlay();
  const num = game.getRandomNumber(0,4,1);
  let result = num >= 0 && num < 4 && num !== 1;
  expect(result).toBe(true);
})

