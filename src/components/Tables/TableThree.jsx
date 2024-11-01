import { useState } from 'react';
import PackageComponent from './PackageComponent';

const packageData = [
  {
    lname: 'Luna',
    fname: 'Stella',
    email: 'lunastella@gmail.com',
    phone: 639098887777,
    location: 'Lucena City',
  },
  {
    lname: 'Antonio',
    fname: 'Kath',
    email: 'katha@gmail.com',
    phone: 639098887777,
    location: 'Lucban',
  },
  {
    lname: 'Mente',
    fname: 'Allysa',
    email: 'allymente@gmail.com',
    phone: 639098887777,
    location: 'Polillo',
  },
  {
    lname: 'Cohen',
    fname: 'Cyan',
    email: 'ccohen@gmail.com',
    phone: 639098887777,
    location: 'Tayabas City',
  },
  {
    lname: 'Reid',
    fname: 'Astrid',
    email: 'areid@gmail.com',
    phone: 639098887777,
    location: 'General Luna',
  },
  {
    lname: 'Baron',
    fname: 'Sydney',
    email: 'sydbaron@gmail.com',
    phone: 639098887777,
    location: 'Catanauan',
  },
];

const TableThree = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter packageData based on search query
  const filteredData = packageData.filter(
    (item) =>
      item.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.lname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div> 
      {/* Search Bar */}
      <div className="mb-4 relative">
        <input
          type="text"
          className="w-full py-2 border border-stroke rounded-sm dark:bg-gray-700 dark:text-white px-12.5"
          placeholder="Search accounts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.3748 14.4998H15.3873L15.0373 14.1623C15.8185 13.2548 16.3895 12.1858 16.7093 11.0319C17.0291 9.87791 17.0899 8.66754 16.8873 7.48735C16.2998 4.01235 13.3998 1.23735 9.89985 0.812346C8.66937 0.656679 7.41958 0.784561 6.24613 1.18621C5.07267 1.58785 4.00665 2.25262 3.12964 3.12964C2.25262 4.00665 1.58785 5.07267 1.18621 6.24613C0.784561 7.41958 0.656679 8.66937 0.812346 9.89985C1.23735 13.3998 4.01235 16.2998 7.48735 16.8873C8.66754 17.0899 9.87791 17.0291 11.0319 16.7093C12.1858 16.3895 13.2548 15.8185 14.1623 15.0373L14.4998 15.3873V16.3748L19.8123 21.6873C20.3248 22.1998 21.1623 22.1998 21.6748 21.6873C22.1873 21.1748 22.1873 20.3373 21.6748 19.8248L16.3748 14.4998ZM8.87485 14.4998C5.76235 14.4998 3.24985 11.9873 3.24985 8.87485C3.24985 5.76235 5.76235 3.24985 8.87485 3.24985C11.9873 3.24985 14.4998 5.76235 14.4998 8.87485C14.4998 11.9873 11.9873 14.4998 8.87485 14.4998Z" fill=""/>
          </svg>        
        </div>
      </div>  

      <h6 className="text-m font-regular text-black dark:text-white">Recently registered accounts</h6>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div>
          {/* <h4 className="text-xl font-semibold text-black dark:text-white">Accounts</h4> */}
        </div>

        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium  bg-[#4b7317] text-white dark:text-white xl:pl-11">
                  First Name
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium  bg-[#4b7317] text-white dark:text-white xl:pl-11">
                  Last Name
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium  bg-[#4b7317] text-white dark:text-white">
                  Email
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium  bg-[#4b7317] text-white dark:text-white">
                  Phone
                </th>
                <th className="py-4 px-4 font-medium  bg-[#4b7317] text-white dark:text-white">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((packageItem, key) => (
                  <PackageComponent
                    key={key}
                    lname={packageItem.lname}
                    fname={packageItem.fname}
                    email={packageItem.email}
                    phone={packageItem.phone}
                    location={packageItem.location}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-black dark:text-white">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  );
};

export default TableThree;
