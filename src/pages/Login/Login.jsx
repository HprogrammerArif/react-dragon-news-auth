import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Login = () => {

  const {logInUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('Location in the login page', location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    logInUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);

      //navigate after login
      navigate(location?.state? location.state: '/')
    })
    .catch(error => {
      console.log(error.message);
    })
  };

  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl text-center">Please login</h2>

      <div className="hero mt-5">
        <div className="hero-content md:w-3/4 lg:w-1/2">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="text-center"><small>Do not have an account? please <Link className="font-bold text-blue-600 underline" to='/register'>Register</Link> </small></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
