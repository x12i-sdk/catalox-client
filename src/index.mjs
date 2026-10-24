import assert from 'node:assert/strict';
import { createCataloxClient } from '@x12i/catalox-client';

const client = createCataloxClient({ baseUrl: 'https://catalox.example.invalid', fetch: async (url, init) => {
  assert(String(url).includes('catalogs'));
  assert.equal(new Headers(init.headers).get('authorization'), 'Bearer fixture-only');
  return Response.json({ outcome: 'success', result: { catalogs: [{ id: 'demo-catalog' }] } });
} });
const result = await client.withToken('fixture-only').listAppCatalogs('demo-app');
assert.equal(result.result.catalogs[0].id, 'demo-catalog');
console.log(result);
// This fixture checks request construction, not a live catalog engine or its authorization policy.
