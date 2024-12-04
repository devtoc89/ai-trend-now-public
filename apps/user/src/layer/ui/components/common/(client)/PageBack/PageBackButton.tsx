"use client";

import { Button } from "@repo/ui/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

function PageBackButton() {
  const router = useRouter();
  const handleOnClick = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <Button onClick={handleOnClick} variant="default">
      back
      <ArrowLeft />
    </Button>
  );
}

export default PageBackButton;
