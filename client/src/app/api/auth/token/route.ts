import { NextRequest, NextResponse } from 'next/server';
import CommonConstants from '@/constants/common';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const accessToken = body.accessToken;
  const expiresAt = body.expiresAt;
  const userInfo = body.userInfo;

  const response = NextResponse.json({ accessToken });

  if (accessToken) {
    response.cookies.set(CommonConstants.COOKIE_ACCESS_TOKEN_NAME, accessToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
    });
  }

  if (expiresAt) {
    response.cookies.set(CommonConstants.COOKIE_EXPIRE_AT_NAME, expiresAt, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
    });
  }

  if (userInfo) {
    response.cookies.set(CommonConstants.COOKIE_USER_INFO_NAME, JSON.stringify(userInfo), {
      path: '/',
      httpOnly: true, 
      sameSite: 'lax',
    });
  }

  return response;
}