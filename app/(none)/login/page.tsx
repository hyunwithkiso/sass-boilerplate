import { LoginForm } from "@/components/auth/login-form";
import Image from "next/image";
import BackgroundLogo from "@/assets/background-logo.webp";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      {/* 왼쪽 배경 이미지 섹션 */}
      <div className="hidden lg:block lg:relative bg-zinc-950">
        <Image
          src={BackgroundLogo}
          alt="Background Logo"
          fill
          className="object-contain p-12"
          priority
          quality={100}
        />
      </div>

      {/* 오른쪽 로그인 섹션 */}
      <div className="flex items-center justify-center p-8">
        <LoginForm />
      </div>
    </div>
  );
}
