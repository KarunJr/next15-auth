"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

export const Social = () => {
  const searchParams = useSearchParams();
  const callback = searchParams.get("callback");
  const signInHandler = (providers: "google" | "github")=>{
    signIn(providers,{
      callbackUrl: callback || DEFAULT_LOGIN_REDIRECT,
    })
  }
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        variant={"outline"}
        size={"lg"}
        className="w-1/2"
        onClick={() => signInHandler("google")}
      >
        <FcGoogle />
      </Button>

      <Button
        variant={"outline"}
        size={"lg"}
        className="w-1/2"
        onClick={() => signInHandler("github")}
      >
        <FaGithub />
      </Button>
    </div>
  );
};
