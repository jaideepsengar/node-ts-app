import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { getSessionBySessionId } from './okta-client';

export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    const { sessionId } = req.cookies;
    if (!sessionId) {
      return next();
    }

    try {
      const session = await getSessionBySessionId(sessionId);
      req.param('auth', session)
    } catch (e) {
      console.log('session fetching failed', e);
    }
    next();
  }
}