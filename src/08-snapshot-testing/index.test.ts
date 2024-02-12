import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  const elements = ['a', 'b', 'c'];
  test('should generate linked list from values 1', () => {
    const result = {
      next: {
        next: { next: { next: null, value: null }, value: 'c' },
        value: 'b',
      },
      value: 'a',
    };
    const res = generateLinkedList(elements);

    expect(res).toStrictEqual(result);
  });

  test('should generate linked list from values 2', () => {
    const result = generateLinkedList(elements);
    expect(result).toMatchSnapshot();
  });
});
