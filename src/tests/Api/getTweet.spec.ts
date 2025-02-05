import { test, expect, request } from '@playwright/test';
import { XApiPage } from '../../utilities/xapi';

test('Get a tweet on X API using POM', async ({}) => {
  const apiRequest = await request.newContext();
  const xApi = new XApiPage(apiRequest);

  const tweetIdToCheck = '1887239437928517959';

  const getResponse = await xApi.getTweet(tweetIdToCheck);
  console.log('Get response status:', getResponse.status());
  console.log('Get response body:', await getResponse.text());
});
