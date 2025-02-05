import { test, expect, request } from '@playwright/test';
import { XApiPage } from '../../utilities/xapi';

test('Post a new tweet on X API using POM', async ({}) => {
  const apiRequest = await request.newContext();
  const xApi = new XApiPage(apiRequest);

  const tweetText = 'Hey this is my tweet';
  const response = await xApi.postTweet(tweetText);

  console.log('Response status:', response.status());
  console.log('Response OK:', response.ok());
  console.log('Response body:', await response.text());

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(201);

  const responseBody = await response.json();
  console.log('Response body JSON:', responseBody);
});
