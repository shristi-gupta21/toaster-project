import React from "react";
import ToastPlayground from "../ToastPlayground/ToastPlayground";
import Footer from "../Footer/Footer";
import ToastProvider from "../ToastProvider/ToastProvider";

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;
