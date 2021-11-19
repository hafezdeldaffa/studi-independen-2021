import { AddTodo } from '../components/helper';

test('Should add todo to the list', () => {
  // Arrange

  const defaultTodo = [
    {
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    },
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    },
    {
      id: 3,
      name: 'Ship it',
      isComplete: false,
    },
  ];

  const newTodo = [
    {
      id: 3,
      name: 'Learn JS',
      isComplete: false,
    },
  ];

  const todo = [newTodo, ...defaultTodo];
  const expected = JSON.stringify(todo);

  // Act
  const actual = AddTodo(defaultTodo, newTodo);
  const result = JSON.stringify(actual);

  // Assert
  expect(result).toBe(expected);
});

test('should not mutate the existing todo array', () => {
  // Arrange
  const defaultTodo = [
    {
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    },
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    },
  ];

  const newTodo = [
    {
      id: 3,
      name: 'Learn JS',
      isComplete: false,
    },
  ];

  const expected = [
    {
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    },
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    },
  ];

  // Act
  AddTodo(defaultTodo, newTodo);
  const actual = defaultTodo;
  const compare = JSON.stringify(expected) === JSON.stringify(actual);

  // Assert
  expect(true).toBe(compare);
});
