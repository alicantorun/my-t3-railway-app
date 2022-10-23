import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center min-h-screen mt-16 pt-16 space-y-4">
        <span className="text-sm text-gray-600">Getting things ready..</span>
      </div>
    );
  }

  // prevent any flicker
  if (!session) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
