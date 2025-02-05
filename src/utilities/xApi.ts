import { APIRequestContext } from '@playwright/test';
import * as dotenv from 'dotenv';
import OAuth from 'oauth-1.0a';
import crypto from 'crypto';

dotenv.config(); // Load environment variables

export class XApiPage {
  private request: APIRequestContext;
  private baseUrl = 'https://api.twitter.com/2/tweets';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // Generate OAuth 1.0a Header
  private getOAuthHeader(method: string, url: string) {
    const oauth = new OAuth({
      consumer: {
        key: process.env.X_API_KEY!,
        secret: process.env.X_API_SECRET_KEY!,
      },
      signature_method: 'HMAC-SHA1',
      hash_function(base_string, key) {
        return crypto
          .createHmac('sha1', key)
          .update(base_string)
          .digest('base64');
      },
    });

    return oauth.toHeader(
      oauth.authorize(
        { url, method },
        {
          key: process.env.X_ACCESS_TOKEN!,
          secret: process.env.X_ACCESS_TOKEN_SECRET!,
        },
      ),
    );
  }

  // POST a tweet
  async postTweet(text: string) {
    const url = this.baseUrl;

    const response = await this.request.post(url, {
      headers: {
        ...this.getOAuthHeader('POST', url),
        'Content-Type': 'application/json',
      },
      data: { text },
    });

    return response;
  }

  // GET a tweet by ID
  async getTweet(tweetId: string) {
    const url = `https://api.twitter.com/2/tweets/${tweetId}`;

    const response = await this.request.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.X_BEARER_TOKEN}`,
      },
    });

    return response;
  }

  // DELETE a tweet by ID
  async deleteTweet(tweetId: string) {
    const url = `https://api.twitter.com/2/tweets/${tweetId}`;

    const response = await this.request.delete(url, {
      headers: {
        ...this.getOAuthHeader('DELETE', url),
        'Content-Type': 'application/json',
      },
    });

    return response;
  }
}
