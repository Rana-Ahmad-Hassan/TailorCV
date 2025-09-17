import AppRoutes from "./routes/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            style: {
              background: "black",
              color: "white",
            },
          },
        }}
      />
    </>
  );
}

export default App;
