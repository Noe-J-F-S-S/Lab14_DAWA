import { HomeView, LoginView, SignUpView} from "../pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView/>} />
        <Route path="/signup" element={<SignUpView/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
