// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Datagyro } from '../client';

export abstract class APIResource {
  protected _client: Datagyro;

  constructor(client: Datagyro) {
    this._client = client;
  }
}
