import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import SafetyKnowledgeBase from "./components/SafetyKnowledgeBase";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SafetyKnowledgeBase />
    <Analytics />
  </React.StrictMode>,
);
