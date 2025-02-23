import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Container = () => {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Outlet />
    </div>
  );
};

export default Container;
