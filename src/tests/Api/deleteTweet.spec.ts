import { test, expect, request } from '@playwright/test';
import { XApiPage } from '../../utilities/xapi';

test('Delete an existing tweet on X API using POM', async ({}) => {
  const apiRequest = await request.newContext();
  const xApi = new XApiPage(apiRequest);

  const existingTweetId = '1887239437928517959';

  const deleteResponse = await xApi.deleteTweet(existingTweetId);

  expect(deleteResponse.ok()).toBeTruthy();
  expect(deleteResponse.status()).toBe(200);
});
