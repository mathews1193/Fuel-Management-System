import { render } from '@testing-library/react';
import axios from 'axios';
import Index from './index';

jest.mock('axios');

test('should fetch orders', () => {
  const orders = [{name: 'Bob'}];
  const resp = {data: orders};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Index.all().then(data => expect(data).toEqual(orders));
});