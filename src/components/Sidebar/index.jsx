import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // Close on click outside
  useEffect(() => {
    const clickHandler = (event) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(event.target) ||
        trigger.current.contains(event.target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // Close if the escape key is pressed
  useEffect(() => {
    const keyHandler = (event) => {
      if (!sidebarOpen || event.keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  // State to track if the button was clicked
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle the button click
  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-zinc-100 duration-300  lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* SIDEBAR HEADER */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink
          to="/dashboard"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <img
            src="src/images/logo/niyoghub.png"
            alt="NiyogHub"
            style={{
              width: '40px',
              height: 'auto',
              // filter: 'brightness(0) invert(1)',
              marginRight: '10px',
            }}
          />
          <h1 style={{ margin: 0, fontWeight: 'bold', fontSize: '24px' }}>
            NiyogHub
          </h1>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z" fill="" />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5 text-black">
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `bg-inherit hover:text-white hover:bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] active:bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] ring-violet-300 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-bold text-black duration-300 ease-in-out dark:hover:bg-meta-4 ${
                      isActive || pathname.includes('calendar')
                        ? 'bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] text-white' // Keeps gradient background when clicked or active
                        : ''
                    }`
                  }
                >
                  <svg
                    className={({ isActive }) =>`fill-white transition-colors duration-300 hover:text-[#DFC029] active:text-[#DFC029] ${
                      isActive
                      ? 'text-[#DFC029]' // Change to #DFC029 when active
                      : 'group-hover:text-[#DFC029]' // Change to #DFC029 on hover
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 21V7L10 0L20 7V21H12.5V12.8333H7.5V21H0Z" fill="#537F19" />
                  </svg>
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/messages"
                  className={({ isActive }) =>
                    `bg-inherit hover:text-white hover:bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] active:bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] ring-violet-300 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-bold text-black duration-300 ease-in-out dark:hover:bg-meta-4 ${
                      isActive || pathname.includes('calendar')
                        ? 'bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] text-white' // Keeps gradient background when clicked or active
                        : ''
                    }`
                  }
                >
                  <svg
                    className={({ isActive }) =>`fill-white transition-colors duration-300 hover:text-[#DFC029] active:text-[#DFC029] ${
                      isActive
                      ? 'text-[#DFC029]' // Change to #DFC029 when active
                      : 'group-hover:text-[#DFC029]' // Change to #DFC029 on hover
                    }`}
                    // className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.363 23.2172C6.20147 23.3611 6.00323 23.4548 5.79154 23.4873C5.57985 23.5198 5.3635 23.4897 5.1679 23.4007C4.9723 23.3116 4.80555 23.1673 4.68725 22.9846C4.56894 22.8018 4.50398 22.5884 4.5 22.3691V19.7845C3.90326 19.7845 3.33097 19.5417 2.90901 19.1095C2.48705 18.6773 2.25 18.0911 2.25 17.4799V9.41381C2.25 8.80259 2.48705 8.21641 2.90901 7.78421C3.33097 7.35201 3.90326 7.10921 4.5 7.10921H16.875C17.4717 7.10921 18.044 7.35201 18.466 7.78421C18.8879 8.21641 19.125 8.80259 19.125 9.41381V17.4799C19.125 18.0911 18.8879 18.6773 18.466 19.1095C18.044 19.5417 17.4717 19.7845 16.875 19.7845H11.2534L6.363 23.2172ZM20.25 14.0426C20.2464 14.1843 20.2464 14.3261 20.25 14.4678V14.0426ZM20.25 14.0426C20.2556 13.9193 20.2568 12.3752 20.2545 9.41151C20.2536 8.49528 19.8976 7.61689 19.2648 6.96934C18.632 6.32179 17.774 5.95806 16.8795 5.95806H7.875V4.8046C7.875 4.19338 8.11205 3.6072 8.53401 3.175C8.95597 2.74281 9.52826 2.5 10.125 2.5H22.5C23.0967 2.5 23.669 2.74281 24.091 3.175C24.5129 3.6072 24.75 4.19338 24.75 4.8046V12.8707C24.75 13.4819 24.5129 14.0681 24.091 14.5003C23.669 14.9325 23.0967 15.1753 22.5 15.1753V17.7599C22.496 17.9791 22.4311 18.1926 22.3128 18.3754C22.1944 18.5581 22.0277 18.7024 21.8321 18.7915C21.6365 18.8805 21.4201 18.9106 21.2085 18.8781C20.9968 18.8456 20.7985 18.7519 20.637 18.608L20.25 18.3361V14.0426Z" fill="#537F19" />
                  </svg>
                  Messages
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contents"
                  className={({ isActive }) =>
                    `bg-inherit hover:text-white hover:bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] active:bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] ring-violet-300 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-bold text-black duration-300 ease-in-out dark:hover:bg-meta-4 ${
                      isActive || pathname.includes('calendar')
                        ? 'bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] text-white' // Keeps gradient background when clicked or active
                        : ''
                    }`
                  }
                >
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.0588 18.8C9.41176 18.8 8.85804 18.5945 8.39765 18.1836C7.93725 17.7727 7.70667 17.2782 7.70588 16.7V4.1C7.70588 3.5225 7.93647 3.0283 8.39765 2.6174C8.85882 2.2065 9.41255 2.0007 10.0588 2H20.6471C21.2941 2 21.8482 2.2058 22.3094 2.6174C22.7706 3.029 23.0008 3.5232 23 4.1V16.7C23 17.2775 22.7698 17.772 22.3094 18.1836C21.849 18.5952 21.2949 18.8007 20.6471 18.8H10.0588ZM5.35294 23C4.70588 23 4.15216 22.7945 3.69176 22.3836C3.23137 21.9727 3.00078 21.4782 3 20.9V6.2H5.35294V20.9H18.2941V23H5.35294Z" fill="#537F19" />
                  </svg>
                  Contents
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/accounts"
                  className={({ isActive }) =>
                    `bg-inherit hover:text-white hover:bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] active:bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] ring-violet-300 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-bold text-black duration-300 ease-in-out dark:hover:bg-meta-4 ${
                      isActive || pathname.includes('calendar')
                        ? 'bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] text-white' // Keeps gradient background when clicked or active
                        : ''
                    }`
                  }
                >
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.8 22.2V25H2V22.2C2 22.2 2 16.6 10.4 16.6C18.8 16.6 18.8 22.2 18.8 22.2ZM14.6 8.90004C14.6 7.93091 14.3537 6.98355 13.8922 6.17775C13.4307 5.37195 12.7747 4.74391 12.0073 4.37304C11.2398 4.00217 10.3953 3.90514 9.58062 4.0942C8.7659 4.28327 8.01753 4.74995 7.43015 5.43523C6.84277 6.1205 6.44276 6.99359 6.2807 7.9441C6.11864 8.8946 6.20182 9.87983 6.51971 10.7752C6.83759 11.6705 7.37592 12.4358 8.06661 12.9742C8.75729 13.5126 9.56932 13.8 10.4 13.8C11.5139 13.8 12.5822 13.2838 13.3698 12.3649C14.1575 11.4459 14.6 10.1996 14.6 8.90004ZM18.728 16.6C19.4657 17.2661 20.0693 18.1126 20.4964 19.0801C20.9235 20.0476 21.1637 21.1126 21.2 22.2V25H26V22.2C26 22.2 26 17.118 18.728 16.6ZM17.6 4.00005C16.7741 3.99557 15.9666 4.28359 15.284 4.82605C16.0129 6.01428 16.4049 7.43884 16.4049 8.90004C16.4049 10.3612 16.0129 11.7858 15.284 12.974C15.9666 13.5165 16.7741 13.8045 17.6 13.8C18.7139 13.8 19.7822 13.2838 20.5699 12.3649C21.3575 11.4459 21.8 10.1996 21.8 8.90004C21.8 7.60048 21.3575 6.35415 20.5699 5.43523C19.7822 4.5163 18.7139 4.00005 17.6 4.00005Z" fill="#537F19" />
                  </svg>
                  Accounts
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    `bg-inherit hover:text-white hover:bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] active:bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] ring-violet-300 group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-bold text-black duration-300 ease-in-out dark:hover:bg-meta-4 ${
                      isActive || pathname.includes('calendar')
                        ? 'bg-[linear-gradient(90deg,#5C8721_0%,#8EB64A_100%)] text-white' // Keeps gradient background when clicked or active
                        : ''
                    }`
                  }
                >
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.3075 13.9285C20.3503 13.6004 20.3718 13.2613 20.3718 12.9004C20.3718 12.5504 20.3503 12.2004 20.2968 11.8723L22.4706 10.1441C22.5643 10.0653 22.6283 9.95569 22.6518 9.83403C22.6752 9.71237 22.6566 9.58618 22.5991 9.47696L20.5431 5.84571C20.4826 5.73585 20.3859 5.65143 20.2703 5.60739C20.1546 5.56335 20.0275 5.56253 19.9113 5.60508L17.352 6.65508C16.8165 6.23946 16.249 5.88946 15.6172 5.62696L15.2317 2.84883C15.2127 2.72363 15.1504 2.60953 15.0561 2.52724C14.9618 2.44496 14.8417 2.39995 14.7177 2.40039H10.6056C10.3486 2.40039 10.1451 2.58633 10.1023 2.84883L9.71677 5.62696C9.08497 5.88946 8.50671 6.25039 7.98199 6.65508L5.42265 5.60508C5.18706 5.51758 4.91935 5.60508 4.79085 5.84571L2.74552 9.47696C2.61701 9.70664 2.65985 9.99102 2.87402 10.1441L5.04785 11.8723C4.99431 12.2004 4.95147 12.5613 4.95147 12.9004C4.95147 13.2395 4.97289 13.6004 5.02643 13.9285L2.8526 15.6566C2.75893 15.7355 2.69492 15.8451 2.67149 15.9668C2.64806 16.0884 2.66665 16.2146 2.7241 16.3238L4.78014 19.9551C4.90864 20.1957 5.17635 20.2723 5.41194 20.1957L7.97128 19.1457C8.50671 19.5613 9.07426 19.9113 9.70606 20.1738L10.0916 22.952C10.1451 23.2145 10.3486 23.4004 10.6056 23.4004H14.7177C14.9747 23.4004 15.1888 23.2145 15.221 22.952L15.6065 20.1738C16.2383 19.9113 16.8165 19.5613 17.3413 19.1457L19.9006 20.1957C20.1362 20.2832 20.4039 20.1957 20.5324 19.9551L22.5884 16.3238C22.7169 16.0832 22.6634 15.8098 22.4599 15.6566L20.3075 13.9285ZM12.6616 16.8379C10.5413 16.8379 8.80655 15.066 8.80655 12.9004C8.80655 10.7348 10.5413 8.96289 12.6616 8.96289C14.7819 8.96289 16.5167 10.7348 16.5167 12.9004C16.5167 15.066 14.7819 16.8379 12.6616 16.8379Z" fill="#537F19" />
                  </svg>
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
