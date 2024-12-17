import { ChevronUp } from "lucide-react";
import { Button } from "./button";

export function ScrollToTop() {
  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed w-12 h-12 bottom-4 right-4 p-2 bg-brand text-white rounded-full hover:bg-hover-brand"
    >
      <ChevronUp className="w-12 h-12" />
    </Button>
  )
}