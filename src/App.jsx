import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "./Footer/Footer";

const App = () => {
  let [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (data.email && data.password) {
        let response = await axios.get(`http://localhost:8080/${data.email}`);
        setData({
          email: "",
          password: "",
        });
        toast.success(`welcome ${response.data.fname}`);
      } else {
        toast.error("please fill all fields");
      }
    } catch (e) {
      console.log(e);
      toast.error("User Not Found");
    }
  };

  return (
    <>
      <div className="flex h-screen flex-wrap items-center justify-center bg-gray-200 text-center">
        <div className="h-fit">
          <h1 className="p-5 text-5xl font-bold text-blue-600">facebook</h1>
          <div>
            <div>
              <p className="w-80 justify-self-center text-xl font-medium">
                Facebook helps you connect and share with the people in your
                life.
              </p>
            </div>
            <div className="mt-4 w-sm rounded-xl bg-white shadow-md shadow-gray-500">
              <form action="" className="flex flex-col gap-4.5">
                <div className="mt-14">
                  <input
                    type="text"
                    placeholder="Email address or phone number"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="size-85/100 h-12 rounded-md border border-gray-200 p-1.5 text-lg shadow-sm outline-offset-2 outline-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    className="size-85/100 h-12 rounded-md border border-gray-200 p-1.5 text-lg shadow-sm outline-offset-2 outline-blue-500"
                  />
                </div>
                <div>
                  <button
                    className="size-85/100 h-11 cursor-pointer rounded-md border bg-blue-600 p-1.5 font-semibold text-white hover:bg-blue-500"
                    onClick={handleSubmit}
                  >
                    Log in
                  </button>
                </div>
                <div>
                  <a href="#" className="text-blue-600">
                    Forgotten password?
                  </a>
                </div>
                <div className="size-90/100 h-px self-center bg-gray-200"></div>
                <div>
                  <button className="mb-8 cursor-pointer rounded-md border bg-green-500 p-3 pr-8 pl-8 font-semibold text-white hover:bg-green-600">
                    <Link to="/">Create new account</Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10"></div>
      <Footer />
    </>
  );
};

export default App;
