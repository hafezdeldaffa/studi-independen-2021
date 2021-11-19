import { Add, Substract, Multiplication } from '../Math';

test('Return sum of two arguments', () => {
  // Arrange
  // Act
  // Assert
  const a = 10;
  const b = 5;
  const output = 15;
  const got = Add(a, b);
  expect(got).toBe(output);
});

test('Return substraction of a - b', () => {
  // Arrange
  // Act
  // Assert
  const a = 10;
  const b = 5;
  const output = 5;
  const got = Substract(a, b);
  expect(got).toBe(output);
});

test('Return multiplication of two arguments', () => {
  // Arrange
  // Act
  // Assert
  const a = 10;
  const b = 5;
  const output = 50;
  const got = Multiplication(a, b);
  expect(got).toBe(output);
});
