import PropTypes from 'prop-types';
import { useState } from 'react';

const SidebarLinkGroup = ({ children, activeCondition }) => {
  const [open, setOpen] = useState(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{children(handleClick, open)}</li>;
};

SidebarLinkGroup.propTypes = {
  children: PropTypes.func.isRequired,
  activeCondition: PropTypes.bool.isRequired,
};

export default SidebarLinkGroup;





// import { useState } from 'react';

// const SidebarLinkGroup = ({ children, activeCondition }) => {
//   const [open, setOpen] = useState(activeCondition);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return <li>{children(handleClick, open)}</li>;
// };

// export default SidebarLinkGroup;


// // import { ReactNode, useState } from 'react';

// // interface SidebarLinkGroupProps {
// //   children: (handleClick: () => void, open: boolean) => ReactNode;
// //   activeCondition: boolean;
// // }

// // const SidebarLinkGroup = ({
// //   children,
// //   activeCondition,
// // }: SidebarLinkGroupProps) => {
// //   const [open, setOpen] = useState<boolean>(activeCondition);

// //   const handleClick = () => {
// //     setOpen(!open);
// //   };

// //   return <li>{children(handleClick, open)}</li>;
// // };

// // export default SidebarLinkGroup;
