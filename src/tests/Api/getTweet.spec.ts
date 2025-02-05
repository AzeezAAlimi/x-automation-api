import { test, expect, request } from '@playwright/test';
import { XApiPage } from '../../utilities/xapi';

test('Get a tweet on X API using POM', async ({}) => {
  const apiRequest = await request.newContext(); // Create the request context
  const xApi = new XApiPage(apiRequest);

  // Replace with the tweet ID you want to check
  const tweetIdToCheck = '1887239437928517959'; // Example tweet ID

  // Step 1: GET the tweet
  const getResponse = await xApi.getTweet(tweetIdToCheck);
  console.log('Get response status:', getResponse.status());
  console.log('Get response body:', await getResponse.text());
});
