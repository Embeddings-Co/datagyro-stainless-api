// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Stream } from '../core/streaming';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Query extends APIResource {
  /**
   * Performs a query against a specified dataset with the given parameters
   *
   * @example
   * ```ts
   * const response = await client.query.execute({
   *   dataset_id: '118',
   *   query_string: 'Engineers',
   *   limit: 10,
   * });
   * ```
   */
  execute(body: QueryExecuteParams, options?: RequestOptions): APIPromise<Stream<QueryExecuteResponse>> {
    return this._client.post('/v1/query', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<QueryExecuteResponse>>;
  }
}

/**
 * SSE stream with events containing JSON data
 */
export type QueryExecuteResponse = string;

export interface QueryExecuteParams {
  /**
   * Identifier for the dataset to query
   */
  dataset_id: string;

  /**
   * The search query to execute against the dataset
   */
  query_string: string;

  /**
   * Maximum number of results to return
   */
  limit?: number;

  /**
   * Option to use a smaller model for faster but potentially less accurate results
   */
  use_smaller_model?: boolean;
}

export declare namespace Query {
  export { type QueryExecuteResponse as QueryExecuteResponse, type QueryExecuteParams as QueryExecuteParams };
}
