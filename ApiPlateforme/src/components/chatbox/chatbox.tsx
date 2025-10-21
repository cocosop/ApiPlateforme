import {  useEffect } from "react";

declare global {
  interface Window {
    chtlConfig?: { chatbotId: string };
  }
}

const Chatbox = () => {
  useEffect(() => {
    // Inject Chatling config and script on mount
    window.chtlConfig = { chatbotId: "9943313373" };
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-id", "9943313373");
    script.id = "chtl-script";
    script.type = "text/javascript";
    script.src = "https://chatling.ai/js/embed.js";
    document.body.appendChild(script);
    return () => {
      if (window.chtlConfig) delete window.chtlConfig;
      const oldScript = document.getElementById("chtl-script");
      if (oldScript) oldScript.remove();
    };
  }, []);

  // Only render nothing, Chatling widget will appear automatically
  return null;
};

export default Chatbox;