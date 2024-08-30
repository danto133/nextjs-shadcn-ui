"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRef } from "react";

const Comp = () => {
  const { toast } = useToast();
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast({
          variant: "destructive",
          title: "TItle",
          description: "Description",
          action: <ToastAction altText="Alt text">Try again</ToastAction>,
        })
      }
    >
      Open Toast
    </Button>
  );
};

export default function Home() {
  const button01 = useRef<HTMLButtonElement>(null);
  const { toast } = useToast();
  return (
    <main className="">
      <h2>Button</h2>
      {/* <Button ref={button01} onClick={() => console.log("click button 1")}>
          Button 01
        </Button> */}
      {/* <Button onClick={() => button01?.current?.click()}>
          <ReloadIcon className="w-4 h-4 animate-spin" />
          Loading
        </Button> */}
      <Comp />
      <Toaster />
    </main>
  );
}
