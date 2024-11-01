// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";


const Onboarding = () => {
  const { setUserInfo } = useUser();

  const handleSubmit = () => {
    const userData = {
      name: 'User Name',
      nickname: 'User Nickname',
      jobPosition: 'Job Position',
      address: 'User Address',
      contactNumber: 'User Contact',
      email: 'user@example.com',
    };

    setUserInfo(userData);
  };


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
              className="w-full p-2 sm:p-8.5 xl:p-17.5"
              style={{
                backgroundColor: 'rgba(236, 236, 236, 0.90)',
                borderRadius: '4px', 
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
                  Tell us about Yourself
                </h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="mb-1 block font-medium text-black dark:text-white">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-stroke bg-white py-2 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none"
                    />
                    <span className="absolute right-4 top-4">
                      {/* SVG icon for Name */}
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <label className="mb-1 block font-medium text-black dark:text-white">
                    Nickname
                  </label>
                  <div className="relative">
                    <input
                      name="nickname"
                      type="text"
                      placeholder="Enter your nickname"
                      className="w-full rounded-lg border border-stroke bg-white py-2 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none"
                    />
                    <span className="absolute right-4 top-4">
                      {/* SVG icon for Nickname */}
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <label className="mb-1 block font-medium text-black dark:text-white">
                    Job Position
                  </label>
                  <div className="relative">
                    <input
                      name="jobPosition"
                      type="text"
                      placeholder="Enter your job position"
                      className="w-full rounded-lg border border-stroke bg-white py-2 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none"
                    />
                    <span className="absolute right-4 top-4">
                      {/* SVG icon for Job Position */}
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <label className="mb-1 block font-medium text-black dark:text-white">
                    Address
                  </label>
                  <div className="relative">
                    <input
                      name="address"
                      type="text"
                      placeholder="Enter your address"
                      className="w-full rounded-lg border border-stroke bg-white py-2 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none"
                    />
                    <span className="absolute right-4 top-4">
                      {/* SVG icon for Address */}
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <label className="mb-1 block font-medium text-black dark:text-white">
                    Contact Number
                  </label>
                  <div className="relative">
                    <input
                      name="contactNumber"
                      type="text"
                      placeholder="Enter your contact number"
                      className="w-full rounded-lg border border-stroke bg-white py-2 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none"
                    />
                    <span className="absolute right-4 top-4">
                      {/* SVG icon for Contact Number */}
                    </span>
                  </div>
                </div><br />

                <div className="mb-5">
                  <Link onClick={handleSubmit} to="/signup" className="text-primary">
                    <input
                      type="submit"
                      value="Continue"
                      className="w-full cursor-pointer p-4 text-white transition hover:bg-opacity-90 bg-[#537F19] border border-[#537F19] rounded-[0px_8px_8px_0px]"
                    />
                  </Link>
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

        {/* image */}
        </div>

      </div>
      
    </>
  );
};

export default Onboarding;
