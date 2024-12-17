import { useCallback } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface SocialMediaProps {
  className?: string;
  icon: React.ReactNode;
  link: string;
}

export function SocialMedia({ link, icon, className }: SocialMediaProps) {
  const openLink = useCallback(() => {
    window.open(link, "_blank");
  }, [link])

  return (
    <Button
      type="button"
      onClick={() => window.scrollTo(0, 0)}
      className={cn("w-12 h-12 p-2 bg-brand text-white rounded-full hover:bg-hover-brand", className)}
      onClickCapture={openLink}
    >
      {icon}
    </Button>
  )
}