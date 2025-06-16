"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Đăng nhập thành công");
      router.push("/");
    } catch (err: unknown) {
  if (err instanceof Error) {
    toast.error(err.message || "Đăng nhập thất bại");
  } else {
    toast.error("Đăng nhập thất bại");
  }
}
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoCapitalize="off"
        autoComplete="username"
        placeholder="Địa chỉ Email"
        className="py-2 px-3 border rounded"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoCapitalize="off"
        autoComplete="current-password"
        placeholder="Mật khẩu"
        className="py-2 px-3 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-[#385DFF] text-white py-2 rounded"
      >
        Đăng nhập
      </button>
    </form>
  );
}
