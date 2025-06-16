"use client";

import { useEffect, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useLoginMatation } from '@/queries/useAuth';
import envConfig from '@/config';

interface User {
  name: string;
}

const LoginGoogle = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const yourClientId = envConfig.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  const loginMutation = useLoginMatation();

  const onSubmit = async (credentialResponse: CredentialResponse) => {
    const credential = credentialResponse.credential;
    if (!credential) {
      console.error("No credential received");
      return;
    }

    try {
      const res = await loginMutation.mutateAsync({ credential });
      localStorage.setItem("user", JSON.stringify(res.user));
      router.push('/');
      toast.success("Đăng nhập thành công");
    } catch (err) {
      console.error('Login error:', err);
      toast.error("Đăng nhập thất bại");
    }

  }

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId={yourClientId}>
      <form className="space-y-4">
          {user && <div>Xin chào, {user.name}</div>}
          <GoogleLogin
            onSuccess={onSubmit}
            onError={() => console.log("Login Failed")}
          />
      </form>
    </GoogleOAuthProvider>
  );
}

export default LoginGoogle;