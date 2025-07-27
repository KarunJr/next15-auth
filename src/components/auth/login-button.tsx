"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
    DialogHeader,
} from "@/components/ui/dialog"
import { LoginForm } from './login-form';
interface LoginButtonProps{
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

const LoginButton = ({children, mode= "redirect", asChild}:LoginButtonProps) => {
    const router = useRouter();
    const onClick = ()=>{
        router.push("/auth/login")
        
    }

    if(mode === "modal"){
        return(
            <Dialog>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className='p-0 w-auto bg-transparent border-none'>
                    <DialogTitle className='hidden'>Login</DialogTitle>
                    <LoginForm/>
                </DialogContent>
            </Dialog>
        )
    }
  return (
    <span className='cursor-pointer' onClick={onClick}>
        {children}
    </span>
  )
}

export default LoginButton