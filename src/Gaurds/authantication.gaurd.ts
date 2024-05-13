import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const authHeader = request.headers['authorization'];
      const accessToken =
        authHeader && authHeader.split(' ')[1]?.replace(/^"|"$/g, '');
      if (!accessToken) {
        throw new Error('Unauthorised Error');
      }
      request.user = this.jwtService.verify(accessToken);
    } catch (err) {
      throw new Error('Unauthorised Error');
    }
    return true;
  }
}
