# @duodeka/notistack-helper

Makes displaying error toasts easier.

## Example

```tsx
import Notistack, { NotistackProvider } from "@duodeka/notistack-helper";
import ReactDOM from "react-dom/client";
import React from "react";

const App = () => {
  const handleErrorClick = () => Notistack.toast(new Error("Test"));
  const handleSuccessClick = () =>
    Notistack.toast("Everything is ok!", { variant: "success" });

  return (
    <>
      <button onClick={handleErrorClick}>Error</button>
      <button onClick={handleSuccessClick}>Success</button>
    </>
  );
};

ReactDOM.createRoot(element).render(
  <NotistackProvider>
    <App />
  </NotistackProvider>
);
```
