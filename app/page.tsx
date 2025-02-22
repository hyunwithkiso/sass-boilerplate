import { auth } from "@/lib/auth/auth-config";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth();
  if (!session) {
    return redirect("/login");
  }
  return <div className=""></div>;
}
