"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Discord } from "lucide-react";
import { signIn } from "next-auth/react";

export function LoginForm() {
  return (
    <Card className="w-[350px] shadow-lg">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">시작하기</CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors"
          onClick={() => signIn("discord", { callbackUrl: "/" })}
        >
          {/* <Discord className="mr-2 h-5 w-5" /> */}
          디스코드로 로그인
        </Button>
      </CardContent>
    </Card>
  );
}
