import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/LoginNSignup/LoginNSignup";
import Success from "./pages/Success/Success";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "success",
      element: <Success />,
    },
  ]);

  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("Failed to find root element");
  const root = createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
  return <></>;
}

export default App;
