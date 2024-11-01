import { useState } from 'react';
import { Link } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '']); 

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

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
              <h1 className="mb-4 text-3xl font-extrabold text-black">Enter OTP</h1>
              <h2 className="text-xl text-black">Please enter the One-Time Password (OTP) <br></br>sent to your email address or mobile number.</h2><br />
              <div className="flex space-x-2">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg"
                    maxLength="1"
                  />
                ))}
              </div><br />

              <div className="mt-6 text-center">
                  <p>
                    Didnt get the code?{' '}
                    <Link to="/" className="text-primary">
                      Resend Code
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
                </div>

              <Link
                className="mt-4 w-full p-2 bg-[#537F19] text-white rounded-lg hover:bg-opacity-90 text-center"
                to="/dashboard"
              >
                Submit OTP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;


