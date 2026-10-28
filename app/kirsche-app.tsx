"use client";

import confetti from "canvas-confetti";
import { useEffect } from "react";

declare global {
  interface Window {
    confetti: typeof confetti;
    __kirscheRuntimeInitialized?: boolean;
  }
}

type KirscheAppProps = {
  markup: string;
  runtimeScript: string;
  styles: string;
};

export default function KirscheApp({
  markup,
  runtimeScript,
  styles,
}: KirscheAppProps) {
  useEffect(() => {
    if (window.__kirscheRuntimeInitialized) return;

    window.confetti = confetti;
    window.__kirscheRuntimeInitialized = true;

    const script = document.createElement("script");
    script.textContent = runtimeScript;
    document.body.appendChild(script);
  }, [runtimeScript]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div
        className="bg-slate-950 text-slate-100 min-h-screen flex flex-col justify-between selection:bg-indigo-500 selection:text-white"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </>
  );
}
