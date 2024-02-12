import phoneNumFormatter from '../phones_formatter';

test.each([
  ['8 (927) 777-66-55', '+79277776655'],
  ['8(927)7776655', '+79277776655'],
  ['8 (927)777/66 / 55', '+79277776655'],
  ['8 (927)777_66_55', '+79277776655'],
  ['+7 960 777 66 55', '+79607776655'],
  ['+86 000 000 0000', '+860000000000'],
])('testing of the function phoneNumFormatter', (raw, formatted) => {
  expect(phoneNumFormatter(raw)).toBe(formatted);
});
