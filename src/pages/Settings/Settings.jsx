import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { useUser } from '../../hooks/UserContext';

const Settings = () => {
  const { userInfo } = useUser();

  const openTab = (evt, tabName) => {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "inherit"; // Reset background
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.style.backgroundColor = "#ccc"; // Set active background
    evt.currentTarget.className += " active";
  };

  return (
    <>
      <DefaultLayout>
        <div className="mx-auto max-w-270">
          <Breadcrumb pageName="Settings" />
          <div>

            <div className="tab" style={{ overflow: 'hidden', border: '1px solid #ccc', backgroundColor: '#f1f1f1' }}>
              <button 
                style={{ float: 'left', border: 'none', outline: 'none', cursor: 'pointer', padding: '14px 16px', transition: '0.3s', fontSize: '17px' }}
                className="tablinks " 
                onClick={(evt) => openTab(evt, 'Account')}
              >
                Account
              </button>
              
              <button 
                style={{ float: 'left', border: 'none', outline: 'none', cursor: 'pointer', padding: '14px 16px', transition: '0.3s', fontSize: '17px' }}
                className="tablinks" 
                onClick={(evt) => openTab(evt, 'PageSettings')}
              >
                Page Settings
              </button>
              
            </div>

            <div
              id="Account"
              className="tabcontent "
              style={{ display: 'none', padding: '6px 12px', border: '1px solid #ccc', borderTop: 'none', color: 'black' }}
            >
              <br /><h1 className="mb-6 px-2.5 text-2xl font-bold text-black dark:text-white">Account Settings</h1>
              <hr className="px-5.5 text-black dark:text-white"/><br />
              <h2 className="mb-3 px-7.5 text-xl font-semibold text-black dark:text-white">Personal Information</h2><br />
              <div className="mb-3 px-10 text-l font-regular text-black dark:text-white">
                <strong>Name:</strong> {userInfo.name}
              </div>
              <div className="mb-3 px-10 text-l font-regular text-black dark:text-white">
                <strong>Nickname:</strong> {userInfo.nickname }
              </div>
              <div className="mb-3 px-10 text-l font-regulard text-black dark:text-white">
                <strong>Job Position:</strong> {userInfo.jobPosition}
              </div>
              <div className="mb-3 px-10 text-l font-regular text-black dark:text-white">
                <strong>Address:</strong> {userInfo.address }
              </div>
              <div className="mb-3 px-10 text-l font-regular text-black dark:text-white">
                <strong>Contact Number:</strong> {userInfo.contactNumber }
              </div>

              
              <br /><hr className="px-5.5 text-black dark:text-white"/><br />
              <div className="mb-3 px-10 text-l font-regular text-black dark:text-white">
                <strong>Email Address:</strong> .....
              </div>
              <div className="mb-3 px-10 text-l font-regular text-black dark:text-white">
                <strong>Password:</strong> .....
                <span style={{ marginLeft: '10px' }}></span>
              </div>

              <br /><hr className="px-5.5 text-black dark:text-white"/><br />

              <div className="mt-6 px-8 text-l font-regular text-black dark:text-white">
                <div className="mt-6 ">
                  <p style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '4px' }}>
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.4648 2.25C19.4648 1.65326 19.2278 1.08097 18.8058 0.65901C18.3838 0.237053 17.8115 0 17.2148 0H11.7488C11.3218 2.54323e-05 10.8989 0.0842044 10.5045 0.247725C10.11 0.411247 9.75161 0.650904 9.44981 0.953L0.949807 9.463C0.340904 10.073 -0.000748903 10.8999 1.23265e-06 11.7618C0.000751369 12.6237 0.343843 13.45 0.953808 14.059L5.41581 18.514C6.02607 19.1221 6.85251 19.4634 7.71401 19.4632C8.57551 19.4631 9.40181 19.1213 10.0118 18.513L10.0148 18.51C9.65237 17.7229 9.46473 16.8666 9.46481 16C9.46481 15.447 9.72181 14.953 10.1228 14.633L8.47781 12.987C8.14989 12.6588 7.96568 12.2139 7.96568 11.75C7.96568 11.2861 8.14989 10.8412 8.47781 10.513L10.4778 8.513C10.7376 8.25297 11.0727 8.08135 11.4355 8.02249C11.7984 7.96363 12.1705 8.02052 12.4992 8.18509C12.8279 8.34965 13.0964 8.61354 13.2667 8.93931C13.437 9.26508 13.5003 9.63619 13.4478 10H15.4648C16.3348 10 17.1898 10.189 17.9738 10.55L18.5138 10.01C19.1226 9.40022 19.4643 8.57365 19.4638 7.712L19.4648 2.25ZM12.9648 5.002C12.9648 4.60418 13.1228 4.22264 13.4041 3.94134C13.6855 3.66004 14.067 3.502 14.4648 3.502C14.8626 3.502 15.2442 3.66004 15.5255 3.94134C15.8068 4.22264 15.9648 4.60418 15.9648 5.002C15.9648 5.39982 15.8068 5.78136 15.5255 6.06266C15.2442 6.34396 14.8626 6.502 14.4648 6.502C14.067 6.502 13.6855 6.34396 13.4041 6.06266C13.1228 5.78136 12.9648 5.39982 12.9648 5.002ZM12.2448 10.28C12.3185 10.2113 12.3776 10.1285 12.4186 10.0365C12.4596 9.94454 12.4816 9.84523 12.4834 9.74452C12.4852 9.64382 12.4667 9.54379 12.4289 9.4504C12.3912 9.35701 12.3351 9.27218 12.2638 9.20096C12.1926 9.12974 12.1078 9.0736 12.0144 9.03588C11.921 8.99816 11.821 8.97963 11.7203 8.98141C11.6196 8.98318 11.5203 9.00523 11.4283 9.04622C11.3363 9.08721 11.2535 9.14631 11.1848 9.22L9.18481 11.22C9.04436 11.3606 8.96547 11.5512 8.96547 11.75C8.96547 11.9488 9.04436 12.1394 9.18481 12.28L11.1848 14.28C11.2535 14.3537 11.3363 14.4128 11.4283 14.4538C11.5203 14.4948 11.6196 14.5168 11.7203 14.5186C11.821 14.5204 11.921 14.5018 12.0144 14.4641C12.1078 14.4264 12.1926 14.3703 12.2638 14.299C12.3351 14.2278 12.3912 14.143 12.4289 14.0496C12.4667 13.9562 12.4852 13.8562 12.4834 13.7555C12.4816 13.6548 12.4596 13.5555 12.4186 13.4635C12.3776 13.3715 12.3185 13.2887 12.2448 13.22L11.5248 12.5H15.4648C16.157 12.5 16.8337 12.7053 17.4093 13.0899C17.9849 13.4744 18.4335 14.0211 18.6984 14.6606C18.9633 15.3001 19.0326 16.0039 18.8976 16.6828C18.7625 17.3617 18.4292 17.9854 17.9397 18.4749C17.4502 18.9644 16.8266 19.2977 16.1476 19.4327C15.4687 19.5678 14.765 19.4985 14.1254 19.2336C13.4859 18.9687 12.9392 18.5201 12.5547 17.9445C12.1701 17.3689 11.9648 16.6922 11.9648 16C11.9648 15.8011 11.8858 15.6103 11.7451 15.4697C11.6045 15.329 11.4137 15.25 11.2148 15.25C11.0159 15.25 10.8251 15.329 10.6845 15.4697C10.5438 15.6103 10.4648 15.8011 10.4648 16C10.4648 16.9889 10.7581 17.9556 11.3075 18.7779C11.8569 19.6001 12.6378 20.241 13.5514 20.6194C14.465 20.9978 15.4704 21.0969 16.4403 20.9039C17.4102 20.711 18.3011 20.2348 19.0003 19.5355C19.6996 18.8363 20.1758 17.9454 20.3687 16.9755C20.5617 16.0055 20.4626 15.0002 20.0842 14.0866C19.7058 13.173 19.0649 12.3921 18.2427 11.8427C17.4204 11.2932 16.4537 11 15.4648 11H11.5248L12.2448 10.28Z" fill="#515151"/>
                      </svg>
                    </span>
                      Reset/Change Admin Account {' '} 
                    <Link to="#" className="text-primary">
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>

              <div className="mt-6 px-8 text-l font-regular text-black dark:text-white">
                <div className="mt-6">
                  <p style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '4px' }}>
                      <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.87827 22C4.61944 22 4.37121 21.8946 4.18819 21.7071C4.00516 21.5196 3.90234 21.2652 3.90234 21V3C3.90234 2.73478 4.00516 2.48043 4.18819 2.29289C4.37121 2.10536 4.61944 2 4.87827 2H18.5413C18.8001 2 19.0483 2.10536 19.2313 2.29289C19.4144 2.48043 19.5172 2.73478 19.5172 3V21C19.5172 21.2652 19.4144 21.5196 19.2313 21.7071C19.0483 21.8946 18.8001 22 18.5413 22H4.87827ZM14.6375 16L19.5172 12L14.6375 8V11H8.78198V13H14.6375V16Z" fill="#515151"/>
                    </svg>
                    </span>
                    <Link to="/">Log Out</Link>
                  </p>
                </div>
              </div>
              <br />

            </div>

            

            <div
              id="PageSettings"
              className="tabcontent "
              style={{ display: 'none', padding: '6px 12px', border: '1px solid #ccc', borderTop: 'none', color: 'black' }}
            >
              <br /><h1 className="mb-6 px-2.5 text-2xl font-bold text-black dark:text-white">Page Settings</h1>
              <hr className="px-5.5 text-black dark:text-white"/><br />
              <h2 className="mb-3 px-7.5 text-xl font-semibold text-black dark:text-white">Web Information</h2>
              <br />
              <div className="mb-3 px-10 text-l font-regular text-black dark:text-white">
                <strong>Name:</strong> NiyogHub
              </div>
              <div className="mb-3 px-10 text-l font-regular text-black dark:text-white">
                <strong>Public Title:</strong> NiyogHub | Info...
              </div>
              <div className="mb-3 px-10 text-l font-regular text-black dark:text-white">
                <strong>Status:</strong> Live
              </div>
              <div className="mb-3 px-10 text-l font-regular text-black dark:text-white">
                <strong>Base URL:</strong> https://NiyogHub.com
              </div>
              <div className="mb-3 px-10 text-l font-regular text-black dark:text-white">
                <strong>Error Landing Page:</strong>
                <label style={{ marginLeft: '10px' }}>
                  <input type="checkbox" /> Toggle On/Off
                </label>
              </div>
              <div className="mb-3 px-10 text-l font-regular text-black dark:text-white">
                <strong>Closed Landing Page:</strong>
                <label style={{ marginLeft: '10px' }}>
                  <input type="checkbox" /> Toggle On/Off
                </label>
              </div><br />
              <div className="mb-3 px-10 text-l font-regular text-black dark:text-white">
                <strong>Tel/Mobile Number:</strong>
                <span style={{ marginLeft: '10px' }}>(+63) 999 999 9999</span>
              </div>
            </div>

          </div>


        </div>
      </DefaultLayout>
    </>
  );
};

export default Settings;