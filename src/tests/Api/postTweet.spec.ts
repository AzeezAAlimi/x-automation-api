import { test, expect, request } from '@playwright/test';
import { XApiPage } from '../../utilities/xapi';

test('Post a new tweet on X API using POM', async ({}) => {
  const apiRequest = await request.newContext();
  const xApi = new XApiPage(apiRequest);

  // Step 1: Post a new tweet
  const tweetText = 'Hey this is my tweet';
  const response = await xApi.postTweet(tweetText);

  // Log detailed response information for debugging
  console.log('Response status:', response.status());
  console.log('Response OK:', response.ok());
  console.log('Response body:', await response.text());

  // Step 2: Validate response
  expect(response.ok()).toBeTruthy(); // This checks if the request was successful
  expect(response.status()).toBe(201); // 201 = Created

  const responseBody = await response.json();
  console.log('Response body JSON:', responseBody);
});
