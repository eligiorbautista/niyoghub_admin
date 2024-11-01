import PropTypes from 'prop-types';

const PackageComponent = ({ lname, fname, email, phone, location }) => (
  <tr>
    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
      <h5 className="font-medium text-black dark:text-white">{fname}</h5>
    </td>
    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
      <h5 className="font-medium text-black dark:text-white">{lname}</h5>
    </td>
    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
      <p className="text-black dark:text-white">{email}</p>
    </td>
    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
      <p className="text-black dark:text-white">{phone}</p>
    </td>
    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
      <p className="text-black dark:text-white">{location}</p>
    </td>
  </tr>
);

// Define PropTypes for validation
PackageComponent.propTypes = {
  lname: PropTypes.string.isRequired,
  fname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default PackageComponent;
