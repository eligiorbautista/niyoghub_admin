
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div
          className="min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('src/assets/bck.png')",
            backgroundPosition: "right bottom",
            backgroundSize: "55% auto",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-wrap items-center">
            {/* OTP Input UI */}
            <div className="flex flex-col items-center">
              <h1 className="mb-4 text-3xl font-extrabold text-black">Forgot Password</h1>
              <h2 className="text-xl text-black"> Please enter the email address associated with your account. <br />
              We will send you a link to reset your password.</h2><br />
              <div className='mt-4 w-full p-2'>
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-white py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-black dark:focus:border-primary"
                    />

                    
                  </div>
                </div>

              <div className="mt-6 text-center">
                  <p>
                    Reset Password?{' '}
                    <Link to="/reset-password" className="text-primary">
                      Reset Password 
                    </Link>
                  </p>
              </div>
              <div className="mt-6 text-center">
                  <p>
                    Allready have an account?{' '}
                    <Link to="/" className="text-primary">
                      Sign In
                    </Link>
                  </p>
                </div><br />

              <Link
                className="mt-4 w-full p-2 bg-[#537F19] text-white rounded-lg hover:bg-opacity-90 text-center"
                to="/"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;


