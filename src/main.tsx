
import ReactDOM from "react-dom/client";
import App from './App'
import "./index.css";
import { defineCustomElements } from "@lexmin0412/wc-react";

defineCustomElements()

const rootDom = document.getElementById("root")

ReactDOM.createRoot(rootDom!).render(<App />);
