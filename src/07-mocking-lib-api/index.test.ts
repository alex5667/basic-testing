import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');

const mockedData = {
  data: { id: 1, name: 'Lisa Brown' },
};
const baseURL = 'https://jsonplaceholder.typicode.com';
const mockedPath = '/test';

describe('throttledGetDataFromApi', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  beforeEach(() => {
    mockedAxios.create.mockReturnThis();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    mockedAxios.get.mockResolvedValueOnce(mockedData);
    await throttledGetDataFromApi('');
    jest.runAllTimers();
    expect(mockedAxios.create).toHaveBeenCalledWith({ baseURL: baseURL });
  });

  test('should perform request to correct provided url', async () => {
    mockedAxios.get.mockResolvedValueOnce(mockedData);
    await throttledGetDataFromApi(mockedPath);
    jest.runAllTimers();
    expect(mockedAxios.create().get).toHaveBeenCalledWith(mockedPath);
  });

  test('should return response data', async () => {
    mockedAxios.get.mockResolvedValueOnce(mockedData);
    expect(await throttledGetDataFromApi(mockedPath)).toEqual(mockedData.data);
  });
});