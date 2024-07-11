'use client';

import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export const ScrollToTopButton = () => {
	return (
    <Button onClick={() => window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})} className="fixed bottom-5 left-5">
      <ArrowUp />
    </Button>
  );
}