import Notistack from "@duodeka/notistack-helper";
import React from "react";

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col gap-2">
        <button
          onClick={() => Notistack.toast("Success!", { variant: "success" })}
        >
          Success
        </button>
        <button onClick={() => Notistack.toast(new Error("This is an error"))}>
          Error
        </button>
      </div>
    </div>
  );
}

export default App;
