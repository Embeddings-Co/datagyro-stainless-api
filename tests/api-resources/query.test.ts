// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Datagyro from 'datagyro';

const client = new Datagyro({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource query', () => {
  // skipped: currently no good way to test endpoints with content type text/event-stream, Prism mock server will fail
  test.skip('execute: only required params', async () => {
    const responsePromise = client.query.execute({ dataset_id: '118', query_string: 'Engineers' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints with content type text/event-stream, Prism mock server will fail
  test.skip('execute: required and optional params', async () => {
    const response = await client.query.execute({
      dataset_id: '118',
      query_string: 'Engineers',
      limit: 10,
      use_smaller_model: false,
    });
  });
});
