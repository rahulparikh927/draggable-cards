import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

async function deferRender() {
  const { serviceWorker } = await import("./mocks/browser");
  return serviceWorker.start();
}

deferRender().then(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
