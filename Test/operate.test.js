import operate from '../src/logic/operate';

test('performs addition correctly', () => {
  expect(operate(2, 3, '+')).toBe('5');
});

test('performs subtraction correctly', () => {
  expect(operate(5, 2, '-')).toBe('3');
});

test('performs multiplication correctly', () => {
  expect(operate(4, 3, 'x')).toBe('12');
});

test('performs division correctly', () => {
  expect(operate(10, 2, '÷')).toBe('5');
});

test('handles division by 0', () => {
  expect(operate(10, 0, '÷')).toBe("Can't divide by 0.");
});

test('performs modulo operation correctly', () => {
  expect(operate(7, 3, '%')).toBe('1');
});

test('handles modulo with division by 0', () => {
  expect(operate(7, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
});

test('throws error for unknown operation', () => {
  expect(() => operate(2, 3, '^')).toThrow("Unknown operation '^'");
});
