import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('src/assets/bck.png')",
            backgroundPosition: "right bottom",
            backgroundSize: "55% auto",
            backgroundRepeat: "no-repeat", 
          }}
        >

        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div
              className="w-full p-4 sm:p-12.5 xl:p-17.5"
              style={{
                backgroundColor: 'rgba(236, 236, 236, 0.90)',
                borderRadius: '8px', 
              }}
            >
              <div
                className="mb-9 p-2" 
                style={{
                  backgroundColor: 'black', 
                  color: 'white', 
                }}
              >
                <h2 className="text-2xl font-bold text-center">
                  Sign up to NiyogHub
                </h2>
              </div>

              <form>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Admin ID
                  </label>
                  <div className="relative">
                    <input
                      type="adminid"
                      placeholder="Enter your admin ID"
                      className="w-full rounded-lg border border-stroke bg-white py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-black dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      {/* SVG icon for Admin ID */}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full rounded-lg border border-stroke bg-white py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-black dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M9.36091 5.55263L11.9545 8.21368V8.07895C11.9545 7.40893 11.6959 6.76635 11.2356 6.29257C10.7753 5.8188 10.151 5.55263 9.5 5.55263H9.36091ZM5.84273 6.22632L7.11091 7.53158C7.07 7.70842 7.04545 7.88526 7.04545 8.07895C7.04545 8.74897 7.30406 9.39155 7.76437 9.86532C8.22469 10.3391 8.84901 10.6053 9.5 10.6053C9.68 10.6053 9.86 10.58 10.0318 10.5379L11.3 11.8432C10.7518 12.1211 10.1464 12.2895 9.5 12.2895C8.41502 12.2895 7.37448 11.8459 6.60729 11.0562C5.8401 10.2666 5.40909 9.19565 5.40909 8.07895C5.40909 7.41368 5.57273 6.79053 5.84273 6.22632ZM1.31818 1.56947L3.55182 3.86842C2.20182 4.96316 1.13818 6.39474 0.5 8.07895C1.91545 11.7758 5.40909 14.3947 9.5 14.3947C10.7682 14.3947 11.9791 14.1421 13.0836 13.6874L13.4355 14.0411L15.8245 16.5L16.8636 15.4305L2.35727 0.5M9.5 3.86842C10.585 3.86842 11.6255 4.31203 12.3927 5.10166C13.1599 5.89128 13.5909 6.96225 13.5909 8.07895C13.5909 8.6179 13.4845 9.14 13.2964 9.61158L15.6936 12.0789C16.9209 11.0263 17.9027 9.64526 18.5 8.07895C17.0845 4.38211 13.5909 1.76316 9.5 1.76316C8.35455 1.76316 7.25818 1.97368 6.22727 2.35263L8.00273 4.16316C8.46909 3.97789 8.96818 3.86842 9.5 3.86842Z" fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Re-type Password
                  </label>
                  <div className="relative">
                    <input
                      type="retype-password"
                      placeholder="Re-type your password"
                      className="w-full rounded-lg border border-stroke bg-white py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-black dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M9.36091 5.55263L11.9545 8.21368V8.07895C11.9545 7.40893 11.6959 6.76635 11.2356 6.29257C10.7753 5.8188 10.151 5.55263 9.5 5.55263H9.36091ZM5.84273 6.22632L7.11091 7.53158C7.07 7.70842 7.04545 7.88526 7.04545 8.07895C7.04545 8.74897 7.30406 9.39155 7.76437 9.86532C8.22469 10.3391 8.84901 10.6053 9.5 10.6053C9.68 10.6053 9.86 10.58 10.0318 10.5379L11.3 11.8432C10.7518 12.1211 10.1464 12.2895 9.5 12.2895C8.41502 12.2895 7.37448 11.8459 6.60729 11.0562C5.8401 10.2666 5.40909 9.19565 5.40909 8.07895C5.40909 7.41368 5.57273 6.79053 5.84273 6.22632ZM1.31818 1.56947L3.55182 3.86842C2.20182 4.96316 1.13818 6.39474 0.5 8.07895C1.91545 11.7758 5.40909 14.3947 9.5 14.3947C10.7682 14.3947 11.9791 14.1421 13.0836 13.6874L13.4355 14.0411L15.8245 16.5L16.8636 15.4305L2.35727 0.5M9.5 3.86842C10.585 3.86842 11.6255 4.31203 12.3927 5.10166C13.1599 5.89128 13.5909 6.96225 13.5909 8.07895C13.5909 8.6179 13.4845 9.14 13.2964 9.61158L15.6936 12.0789C16.9209 11.0263 17.9027 9.64526 18.5 8.07895C17.0845 4.38211 13.5909 1.76316 9.5 1.76316C8.35455 1.76316 7.25818 1.97368 6.22727 2.35263L8.00273 4.16316C8.46909 3.97789 8.96818 3.86842 9.5 3.86842Z" fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <Link to="/" className="text-primary">
                    <input
                      type="submit"
                      value="Sign In"
                      className="w-full cursor-pointer rounded-lg border border-primary bg-[#537F19] p-4 text-white transition hover:bg-opacity-90"
                    />
                  </Link>
                </div>

                {/* Other buttons and links */}

                <div className="mt-6 text-center">
                  <p>
                    Allready have an account?{' '}
                    <Link to="/" className="text-primary">
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-start">
              <div className="flex items-center justify-center">
                {/* Adjusted the logo size */}
                <img src="src/assets/black(transparent).png" alt="NiyogHub Logo" className="h-28 mr-5" /> 
                <div>
                  <h2 className="text-green-#537F19 font-bold">W E L C O M E  T O</h2>
                  <h1 className="text-6xl font-extrabold text-black dark:text-white">NiyogHub</h1>
                  <h3 className="font-bold">Admin Dashboard</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

