import { BrowserRouter } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
