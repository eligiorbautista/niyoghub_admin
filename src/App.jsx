import { Route, Routes} from 'react-router-dom';

import PageTitle from '../src/components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import Overview from '../src/pages/Dashboard/Dashboard';
import Profile from './pages/Profile';
import Settings from '../src/pages/Settings/Settings';
import Accounts from './pages/Accounts/Accounts';
import Messages from './pages/Messages/Messages';
import Contents from './pages/Contents/Contents';
import Onboarding from './pages/Authentication/Onboarding';
import SignUp from './pages/Authentication/SignUp';
import Otp from './pages/Authentication/OTP';
import ResetPassword from './pages/Authentication/ResetPassword';
import ForgotPassword from './pages/Authentication/ForgotPassword';

function App() {
  return (
    <>
    <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Signin | NiyogHub" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <PageTitle title="Dashboard | NiyogHub" />
              <Overview />
            </>
          }
        />    
            <Route
              path="/messages"
              element={
                <>
                  <PageTitle title="Messages | NiyogHub" />
                  <Messages />
                </>
              }
            />
            <Route
              path="/contents"
              element={
                <>
                  <PageTitle title="Contents | NiyogHub" />
                  <Contents />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <PageTitle title="Profile | NiyogHub" />
                  <Profile />
                </>
              }
            />
            <Route
              path="/accounts"
              element={
                <>
                  <PageTitle title="Accounts | NiyogHub" />
                  <Accounts />
                </>
              }
            />
            <Route
              path="/settings"
              element={
                <>
                  <PageTitle title="Settings | NiyogHub" />
                  <Settings />
                </>
              }
            />
            <Route
              path="/onboarding"
              element={
                <>
                  <PageTitle title="Onboarding | NiyogHub" />
                  <Onboarding />
                </>
              }
            /> 
            <Route
              path="/signup"
              element={
                <>
                  <PageTitle title="SignUp | NiyogHub" />
                  <SignUp />
                </>
              }
            /> 
            <Route
              path="/otp"
              element={
                <>
                  <PageTitle title="Verification | NiyogHub" />
                  <Otp />
                </>
              }
            /> 
            <Route
              path="/forgot-password"
              element={
                <>
                  <PageTitle title="Forgot-Password | NiyogHub" />
                  <ForgotPassword />
                </>
              }
            /> 
            <Route
              path="/reset-password"
              element={
                <>
                  <PageTitle title="Reset-Password | NiyogHub" />
                  <ResetPassword />
                </>
              }
            /> 
      </Routes>
    </>
  );
}

export default App;






// import { useEffect, useState } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';

// import Loader from './common/Loader';
// import PageTitle from '../src/components/PageTitle'
// import SignIn from './pages/Authentication/SignIn';
// import Overview from '../src/pages/Dashboard/Dashboard'
// import Profile from './pages/Profile';
// import Settings from '../src/pages/Settings/Settings';
// import DefaultLayout from './layout/DefaultLayout';
// import Accounts from './pages/Accounts/Accounts';
// import Messages from './pages/Messages/Messages';
// import Contents from './pages/Contents/Contents';

// function App() {
//   const [loading, setLoading] = useState<boolean>(true);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return loading ? (
    
//     <Loader />
//   ) : (
//     <DefaultLayout>
//       <Routes>
//         <Route
//           index
//           element={
//             <>
//               <PageTitle title="Dashboard | NiyogHub" />
//               <Overview />
//             </>
//           }
//         />
//         <Route
//           path="/messages"
//           element={
//             <>
//               <PageTitle title="Messages | NiyogHub" />
//               <Messages />
//             </>
//           }
//         /> 
//         <Route
//           path="/contents"
//           element={
//             <>
//               <PageTitle title="Contents | NiyogHub" />
//               <Contents />
//             </>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <>
//               <PageTitle title="Profile | NiyogHub" />
//               <Profile />
//             </>
//           }
//         />
//         <Route
//           path="/accounts"
//           element={
//             <>
//               <PageTitle title="Accounts | NiyogHub" />
//               <Accounts />
//             </>
//           }
//         />
//         <Route
//           path="/settings"
//           element={
//             <>
//               <PageTitle title="Settings | NiyogHub" />
//               <Settings />
//             </>
//           }
//         />
      
//         <Route
//           path="/"
//           element={
//             <>
//               <PageTitle title="Signin | NiyogHub" />
//               <SignIn />
//             </>
//           }
//         />
//       </Routes>
//     </DefaultLayout>
//   );
// }

// export default App
