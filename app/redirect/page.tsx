"use client";

import RedirectClient from "@/modules/redirect-client";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function RedirectPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RedirectClient />
    </Suspense>
  );
}
