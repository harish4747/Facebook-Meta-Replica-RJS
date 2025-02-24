import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
import { toast } from "react-toastify";
import axios from "axios";

const CreateAccount = () => {
  let [error, setError] = useState({
    fname: false,
    sname: false,
    mobile_email: false,
    password: false,
  });

  let [payLoad, setPayLoad] = useState({});
  let [data, setData] = useState({
    fname: "",
    sname: "",
    date: "1",
    month: "JAN",
    year: "2025",
    gender: "",
    mobile_email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value.trim() });
  };

  useEffect(() => {
    if (Object.keys(payLoad).length === 0) return;
    try {
      const addUser = async () => {
        let message = await axios.post("http://localhost:8080/signup", payLoad);
        toast.success(message.data);
      };
      addUser();
    } catch (e) {
      console.log(e);
    }
  }, [payLoad]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError((prev) => ({
      ...prev,
      fname: !data.fname,
      sname: !data.sname,
      mobile_email: !data.mobile_email,
      password: !data.password,
    }));

    if (
      data.fname &&
      data.sname &&
      data.mobile_email &&
      data.password &&
      data.gender
    ) {
      setPayLoad({
        fname: data.fname,
        sname: data.sname,
        dob: data.date + "-" + data.month + "-" + data.year,
        gender: data.gender,
        mobile_email: data.mobile_email,
        password: data.password,
      });
    } else {
      if (!(data.fname && data.sname && data.mobile_email && data.password)) {
        toast.error("please fill all fields");
      } else {
        toast.error("please choose gender");
      }
    }
  };

  const isEmpty = (e) => {
    !e.target.value
      ? setError({ ...error, [e.target.name]: true })
      : setError({ ...error, [e.target.name]: false });
  };

  return (
    <>
      <section className="flex min-h-full justify-center bg-gray-200 p-5 text-center font-sans">
        <div className="w-md">
          <article>
            <h1 className={`text-5xl font-bold text-blue-600`}>facebook</h1>
          </article>
          <div className="mt-5 flex flex-col gap-1 rounded-md border border-gray-200 bg-white pt-2 shadow-2xl">
            <article>
              <div>
                <h1 className="text-2xl font-bold">Create a new account</h1>
              </div>
              <div>
                <p className="text-gray-600">It&#39;s quick and easy.</p>
              </div>
            </article>
            <article>
              <div className="mt-4 mb-4 h-px w-full bg-gray-200"></div>
            </article>
            <article>
              <form
                action=""
                className="flex flex-col items-start gap-3 pr-2 pl-2"
              >
                <article className="flex w-full justify-around">
                  <div>
                    <input
                      type="text"
                      name="fname"
                      onChange={handleChange}
                      onBlur={isEmpty}
                      className={`h-9 rounded-sm border pl-3 ${!error.fname ? "border-gray-300" : "border-red-600"}`}
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="sname"
                      onChange={handleChange}
                      onBlur={isEmpty}
                      className={`h-9 rounded-sm border pl-3 ${!error.sname ? "border-gray-300" : "border-red-600"}`}
                      placeholder="Surname"
                    />
                  </div>
                </article>
                <article className="flex w-full flex-col gap-1.5">
                  <label
                    htmlFor=""
                    className="ml-3 self-start text-xs text-gray-500"
                  >
                    Date of birth
                  </label>
                  <div className="flex justify-evenly">
                    <select
                      name="date"
                      onChange={handleChange}
                      onBlur={isEmpty}
                      className="h-8 w-32 rounded-sm border border-gray-300"
                      id="date"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <select
                      name="month"
                      onChange={handleChange}
                      onBlur={isEmpty}
                      className="h-8 w-32 rounded-sm border border-gray-300"
                      id="month"
                    >
                      <option value="JAN">JAN</option>
                      <option value="FEB">FEB</option>
                      <option value="MAR">MAR</option>
                      <option value="APR">APR</option>
                      <option value="MAY">MAY</option>
                      <option value="JUN">JUN</option>
                      <option value="JUL">JUL</option>
                      <option value="AUG">AUG</option>
                      <option value="SEP">SEP</option>
                      <option value="OCT">OCT</option>
                      <option value="NOV">NOV</option>
                      <option value="DEC">DEC</option>
                    </select>
                    <select
                      name="year"
                      onChange={handleChange}
                      onBlur={isEmpty}
                      className="h-8 w-32 rounded-sm border border-gray-300"
                      id="year"
                    >
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                    </select>
                  </div>
                </article>
                <article className="flex w-full flex-col gap-1">
                  <label
                    htmlFor=""
                    className="ml-3 self-start text-xs text-gray-500"
                  >
                    Gender
                  </label>
                  <div className="flex justify-evenly" name="gender">
                    <div className="gender flex h-8 w-32 items-center justify-evenly rounded-sm border border-gray-300">
                      <label htmlFor="">Female</label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="gender flex h-8 w-32 items-center justify-evenly rounded-sm border border-gray-300">
                      <label htmlFor="">Male</label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="gender flex h-8 w-32 items-center justify-evenly rounded-sm border border-gray-300">
                      <label htmlFor="">Custom</label>
                      <input
                        type="radio"
                        name="gender"
                        value="custom"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </article>
                <article className="size-95/100 self-center">
                  <div>
                    <input
                      className={`h-10 w-full rounded-sm border pl-2 ${!error.mobile_email ? "border-gray-300" : "border-red-600"}`}
                      type="text"
                      name="mobile_email"
                      onBlur={isEmpty}
                      onChange={handleChange}
                      placeholder="Mobile number or email address"
                    />
                  </div>
                </article>
                <article className="size-95/100 self-center">
                  <div>
                    <input
                      type="text"
                      name="password"
                      onChange={handleChange}
                      onBlur={isEmpty}
                      className={`h-10 w-full rounded-sm border pl-2 ${!error.password ? "border-gray-300" : "border-red-600"}`}
                      placeholder="New password"
                    />
                  </div>
                </article>
                <article className="size-95/100 self-center">
                  <p className="text-left text-xs text-gray-500">
                    People who use our service may have uploaded your contact
                    information to Facebook. Learn more.
                  </p>
                </article>
                <article className="size-95/100 self-center">
                  <p className="text-left text-xs text-gray-500">
                    By clicking Sign Up, you agree to our Terms, Privacy Policy
                    and Cookies Policy. You may receive SMS notifications from
                    us and can opt out at any time.
                  </p>
                </article>
                <article className="self-center">
                  <button
                    className="h-10 w-45 rounded-sm border bg-green-500 font-bold text-white hover:bg-green-600"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </article>
                <article className="mb-4 self-center text-lg font-medium text-blue-600">
                  <div>
                    <Link to="/signin">Already have an account?</Link>
                  </div>
                </article>
              </form>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CreateAccount;
