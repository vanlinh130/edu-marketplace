import Link from "next/link";
import Image from "next/image";
import LoginForm from "./login-form";
import LoginGoogle from "./login-google";

const Login = () => {
  return (
    <div className="w-[320px] py-[5%] m-auto" id="login">
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <Link href="/" className="">
            <Image
              src="/images/logo/logo02.png"
              alt=""
              width={206}
              height={74}
              className="py-2.5 object-contain"
            />
          </Link>
        </div>
        <div className="mt-[35px] mb-[10px]">
          <h2 className="text-[#1E2132] text-[20px] font-bold">Đăng Nhập</h2>
        </div>
        <LoginForm/>
        <LoginGoogle/>
      </div>
    </div>
  );
};

export default Login;
