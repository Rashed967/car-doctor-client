import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
    const {signInUser} = useContext(AuthContext)

    const signInHandler = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email,password)
        .then(result => {
            const user = result.user;
            console.log('login user is ', user)
        })
        .catch(error => console.error(error.message))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left md:w-1/2">
      
      <img src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:w-1/2">
      <div className="card-body">
      <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={signInHandler}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-success" type="submit" value="Sign in" />
        </div>
        </form>
        <p>New to this site? <Link className='text-blue-400' to="/register">Register</Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;