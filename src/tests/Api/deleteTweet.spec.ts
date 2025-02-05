import { test, expect, request } from '@playwright/test';
import { XApiPage } from '../../utilities/xapi';

test('Delete an existing tweet on X API using POM', async ({}) => {
    const apiRequest = await request.newContext();
    const xApi = new XApiPage(apiRequest);
  
    // Step 1: Use an existing tweet ID (replace this with an actual ID from a previous tweet)
    const existingTweetId = '1887239437928517959'; // Replace with your existing tweet ID
  
    // Step 2: Delete the existing tweet
    const deleteResponse = await xApi.deleteTweet(existingTweetId);
  
    // Step 3: Validate deletion response
    expect(deleteResponse.ok()).toBeTruthy();  // Ensure delete was successful
    expect(deleteResponse.status()).toBe(200); // HTTP status 200 for successful deletion
  });