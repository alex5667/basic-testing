import {
  resolveValue,
  throwError,
  throwCustomError,
  rejectCustomError,
  MyAwesomeError,
} from './index';

describe('resolveValue', () => {
  test('should resolve with the given value', async () => {
    const value = 'test';
    const result = await resolveValue(value);
    expect(result).toBe(value);
  });
});

describe('throwError', () => {
  test('should throw a generic error with default message', () => {
    expect(() => throwError()).toThrow('Oops!');
  });

  test('should throw a generic error with provided message', () => {
    const errorMessage = 'Custom error message';
    expect(() => throwError(errorMessage)).toThrow(errorMessage);
  });
});

describe('throwCustomError', () => {
  test('should throw a custom error', () => {
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  });

  test('should throw an error with custom message', () => {
    expect(() => throwCustomError()).toThrow(
      'This is my awesome custom error!',
    );
  });
});

describe('rejectCustomError', () => {
  test('should reject with a custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });

  test('should reject with an error with custom message', async () => {
    await expect(rejectCustomError()).rejects.toThrow(
      'This is my awesome custom error!',
    );
  });
});
