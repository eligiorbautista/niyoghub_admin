
import { useState } from 'react';
import TextEditor from './TextEditor';
import TableCarousel from './CarouselTable';

const PostButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({ title: "", description: "", file: null });
  const [submittedData, setSubmittedData] = useState([]);

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ title: "", description: "", file: null });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, { ...formData, category: selectedCategory }]);
    closeModal();
  };

  const [selectedOption, setSelectedOption] = useState('To');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const getSVGIcon = (category) => {
    switch (category) {
      case "Announcement":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="25" viewBox="0 0 33 25" fill="none">
            <path d="M17.9039 1.83284C17.1461 2.47258 16.1864 2.82353 15.1947 2.82353H3.79843C2.94098 2.82353 2.11866 3.18298 1.51235 3.82281C0.906048 4.46264 0.56543 5.33044 0.56543 6.23529V13.0588C0.56543 13.9637 0.906048 14.8315 1.51235 15.4713C2.11866 16.1111 2.94098 16.4706 3.79843 16.4706C4.6912 16.4706 5.41493 17.1943 5.41493 18.0871V23.2941C5.41493 23.7465 5.58524 24.1804 5.88839 24.5004C6.19154 24.8203 6.60271 25 7.03143 25H10.2644C10.6931 25 11.1043 24.8203 11.4075 24.5004C11.7106 24.1804 11.8809 23.7465 11.8809 23.2941V20.0216C11.8809 18.0604 13.4708 16.4706 15.4319 16.4706C16.2704 16.4706 17.0819 16.7673 17.7226 17.3082L17.9039 17.4613C20.6343 19.7664 24.8129 17.8255 24.8129 14.2522V5.04192C24.8129 1.46859 20.6343 -0.472276 17.9039 1.83284ZM32.0872 9.64706C32.0872 10.1726 32.0368 10.6893 31.9397 11.1906C31.3478 14.2451 28.0459 12.7894 28.0459 9.67807C28.0459 6.55194 31.373 5.10031 31.9502 8.17269C32.0404 8.6527 32.0872 9.14606 32.0872 9.64706Z" fill="white"/>
          </svg>
        );

      case "Events":
        return <svg xmlns="http://www.w3.org/2000/svg" width="43" height="36" viewBox="0 0 43 36" fill="none">
          <g >
          <path d="M11.8856 10C12.1989 10 12.4994 9.89464 12.721 9.70711C12.9426 9.51957 13.0671 9.26522 13.0671 9V3C13.0671 2.73478 12.9426 2.48043 12.721 2.29289C12.4994 2.10536 12.1989 2 11.8856 2C11.5722 2 11.2717 2.10536 11.0501 2.29289C10.8286 2.48043 10.7041 2.73478 10.7041 3V9C10.7041 9.26522 10.8286 9.51957 11.0501 9.70711C11.2717 9.89464 11.5722 10 11.8856 10Z" fill="white"/>
          <path d="M30.7899 10C31.1032 10 31.4037 9.89464 31.6253 9.70711C31.8469 9.51957 31.9713 9.26522 31.9713 9V3C31.9713 2.73478 31.8469 2.48043 31.6253 2.29289C31.4037 2.10536 31.1032 2 30.7899 2C30.4765 2 30.176 2.10536 29.9544 2.29289C29.7329 2.48043 29.6084 2.73478 29.6084 3V9C29.6084 9.26522 29.7329 9.51957 29.9544 9.70711C30.176 9.89464 30.4765 10 30.7899 10Z" fill="white"/>
          <path d="M38.1735 6.00012H33.4476V9.00012C33.4476 9.58359 33.1738 10.1432 32.6863 10.5557C32.1989 10.9683 31.5377 11.2001 30.8484 11.2001C30.159 11.2001 29.4979 10.9683 29.0104 10.5557C28.523 10.1432 28.2491 9.58359 28.2491 9.00012V6.00012H14.4849V9.00012C14.4849 9.58359 14.2111 10.1432 13.7236 10.5557C13.2362 10.9683 12.5751 11.2001 11.8857 11.2001C11.1963 11.2001 10.5352 10.9683 10.0478 10.5557C9.5603 10.1432 9.28645 9.58359 9.28645 9.00012V6.00012H4.56055C4.27939 5.99741 4.00044 6.04245 3.7402 6.13258C3.47996 6.22271 3.24372 6.35609 3.04544 6.52484C2.84717 6.69359 2.69089 6.89428 2.58585 7.11505C2.48081 7.33581 2.42914 7.57216 2.4339 7.81012V30.1901C2.4292 30.4239 2.47896 30.6561 2.58034 30.8736C2.68171 31.0911 2.83271 31.2895 3.02471 31.4576C3.21671 31.6257 3.44595 31.7601 3.69934 31.8532C3.95272 31.9463 4.22529 31.9962 4.50148 32.0001H38.1735C38.4497 31.9962 38.7223 31.9463 38.9756 31.8532C39.229 31.7601 39.4583 31.6257 39.6503 31.4576C39.8423 31.2895 39.9933 31.0911 40.0946 30.8736C40.196 30.6561 40.2458 30.4239 40.2411 30.1901V7.81012C40.2458 7.57635 40.196 7.3441 40.0946 7.12662C39.9933 6.90913 39.8423 6.71069 39.6503 6.54261C39.4583 6.37453 39.229 6.2401 38.9756 6.14702C38.7223 6.05394 38.4497 6.00402 38.1735 6.00012ZM30.7184 16.5801L19.2935 26.2501L13.0672 20.9401C12.7913 20.6833 12.6419 20.347 12.6495 20C12.6571 19.653 12.8212 19.3216 13.1081 19.0736C13.395 18.8257 13.783 18.6799 14.1928 18.6663C14.6025 18.6526 15.0029 18.772 15.312 19.0001L19.3054 22.3801L28.4263 14.6601C28.5761 14.5334 28.7538 14.4329 28.9494 14.3643C29.1451 14.2957 29.3547 14.2604 29.5665 14.2604C29.7782 14.2604 29.9879 14.2957 30.1835 14.3643C30.3791 14.4329 30.5569 14.5334 30.7066 14.6601C30.8563 14.7868 30.9751 14.9373 31.0561 15.1029C31.1371 15.2684 31.1788 15.4459 31.1788 15.6251C31.1788 15.8043 31.1371 15.9818 31.0561 16.1474C30.9751 16.3129 30.8563 16.4634 30.7066 16.5901L30.7184 16.5801Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_160_3323">
              <rect x="0.0712891" width="42.5331" height="36" rx="5" fill="white"/>
            </clipPath>
          </defs>
        </svg>;

      case "News & Programs":
        return <svg xmlns="http://www.w3.org/2000/svg" width="34" height="31" viewBox="0 0 34 31" fill="none">
          <path d="M2.28278 0C1.85036 0 1.43565 0.179985 1.12989 0.500359C0.824121 0.820734 0.652344 1.25526 0.652344 1.70833V29.0417C0.652344 29.4947 0.824121 29.9293 1.12989 30.2496C1.43565 30.57 1.85036 30.75 2.28278 30.75H31.6306C32.063 30.75 32.4777 30.57 32.7835 30.2496C33.0893 29.9293 33.261 29.4947 33.261 29.0417V1.70833C33.261 1.25526 33.0893 0.820734 32.7835 0.500359C32.4777 0.179985 32.063 0 31.6306 0H2.28278ZM7.17408 11.7246C7.17408 9.02325 9.36399 6.83333 12.0654 6.83333C14.7668 6.83333 16.9567 9.02325 16.9567 11.7246V12.192C16.9567 14.8934 14.7668 17.0833 12.0654 17.0833C9.36399 17.0833 7.17408 14.8934 7.17408 12.192V11.7246ZM12.0654 10.25C11.1649 10.25 10.435 10.98 10.435 11.8804V12.0362C10.435 12.9367 11.1649 13.6667 12.0654 13.6667C12.9659 13.6667 13.6958 12.9367 13.6958 12.0362V11.8804C13.6958 10.98 12.9659 10.25 12.0654 10.25ZM26.7393 8.54167C26.7393 9.48515 25.9745 10.25 25.031 10.25H21.9259C20.9824 10.25 20.2176 9.48515 20.2176 8.54167C20.2176 7.59818 20.9824 6.83333 21.9259 6.83333H25.031C25.9745 6.83333 26.7393 7.59818 26.7393 8.54167ZM21.9259 17.0833C20.9824 17.0833 20.2176 16.3185 20.2176 15.375C20.2176 14.4315 20.9824 13.6667 21.9259 13.6667H25.031C25.9745 13.6667 26.7393 14.4315 26.7393 15.375C26.7393 16.3185 25.9745 17.0833 25.031 17.0833H21.9259ZM8.88241 23.9167C7.93893 23.9167 7.17408 23.1518 7.17408 22.2083C7.17408 21.2648 7.93893 20.5 8.88242 20.5H25.031C25.9745 20.5 26.7393 21.2648 26.7393 22.2083C26.7393 23.1518 25.9745 23.9167 25.031 23.9167H8.88241Z" fill="white"/>
        </svg>;

      case "Notifications":
        return <svg xmlns="http://www.w3.org/2000/svg" width="34" height="30" viewBox="0 0 34 30" fill="none">
        <path d="M16.9568 1.25C16.5673 1.24995 16.1823 1.32694 15.828 1.47573C15.4737 1.62453 15.1583 1.84167 14.9031 2.11242C14.648 2.38318 14.4591 2.70123 14.3493 3.04502C14.2395 3.38881 14.2113 3.7503 14.2666 4.105C12.2973 4.63991 10.569 5.74652 9.33965 7.25959C8.11033 8.77265 7.44602 10.611 7.44591 12.5V22.5H6.08721C5.72686 22.5 5.38127 22.6317 5.12647 22.8661C4.87166 23.1005 4.72852 23.4185 4.72852 23.75C4.72852 24.0815 4.87166 24.3995 5.12647 24.6339C5.38127 24.8683 5.72686 25 6.08721 25H27.8263C28.1867 25 28.5323 24.8683 28.7871 24.6339C29.0419 24.3995 29.185 24.0815 29.185 23.75C29.185 23.4185 29.0419 23.1005 28.7871 22.8661C28.5323 22.6317 28.1867 22.5 27.8263 22.5H26.4676V12.5C26.4675 10.611 25.8032 8.77265 24.5739 7.25959C23.3446 5.74652 21.6163 4.63991 19.647 4.105C19.7023 3.7503 19.6741 3.38881 19.5642 3.04502C19.4544 2.70123 19.2655 2.38318 19.0104 2.11242C18.7553 1.84167 18.4399 1.62453 18.0855 1.47573C17.7312 1.32694 17.3463 1.24995 16.9568 1.25ZM19.6742 27.5C19.6742 27.8315 19.531 28.1495 19.2762 28.3839C19.0214 28.6183 18.6758 28.75 18.3155 28.75H15.5981C15.2377 28.75 14.8921 28.6183 14.6373 28.3839C14.3825 28.1495 14.2394 27.8315 14.2394 27.5C14.2394 27.1685 14.3825 26.8505 14.6373 26.6161C14.8921 26.3817 15.2377 26.25 15.5981 26.25H18.3155C18.6758 26.25 19.0214 26.3817 19.2762 26.6161C19.531 26.8505 19.6742 27.1685 19.6742 27.5Z" fill="white"/>
      </svg>;
        
      default:
        return null;
    }
  };

  // Customize the input fields for each category
  const getModalContent = () => {
    switch (selectedCategory) {
      case "Announcement":
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                required
              />
            </div>
            <label className="block text-gray-700">Upload File</label>
              <div
                id="FileUpload"
                className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
              >    
                <div className="mb-4 flex flex-col items-center justify-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                              fill="#3C50E0"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                        fill="#3C50E0"
                      />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                          fill="#3C50E0"
                        />
                      </svg>
                    </span>
                    <p>
                    <span className="text-primary">Click to upload</span> or
                        drag and drop
                    </p>
                  <p className="mt-1.5">SVG, PNG, JPG or GIF</p><br />
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    className="w-full"
                  />
                </div>
              </div>
              
              
          </>
        );

      case "Events":
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="w-2/3">
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                  required
                />
              </div>
              <div className="w-1/3">
                <label className="block text-gray-700">Time</label>
                <input
                  type="time"
                  name="time"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                  required
                />
              </div>
            </div>

            
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <div className="flex space-x-4 mb-4">
                <TextEditor />
              </div>
            </div>
          </>
        );

      case "News & Programs":
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="headline"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Subtitle</label>
              <input
                type="text"
                name="headline"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                required
              />
            </div>
            <label className="block text-gray-700">Upload File</label>
              <div
                id="FileUpload"
                className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
              >    
                <div className="mb-4 flex flex-col items-center justify-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                              fill="#3C50E0"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                        fill="#3C50E0"
                      />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                          fill="#3C50E0"
                        />
                      </svg>
                    </span>
                    <p>
                    <span className="text-primary">Click to upload</span> or
                        drag and drop
                    </p>
                  <p className="mt-1.5">SVG, PNG, JPG or GIF</p><br />
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    className="w-full"
                  />
                </div>
              </div>
              <TextEditor /><br />
          </>
        );

      case "Notifications":
        return (
          <>
            <div className="flex space-x-4 mb-4">
              <div className="w-1/4">
                <div className="w-full max-w-xs mb-4">
                <div className="relative">
                  <select
                    id="combo-box"
                    value={selectedOption}
                    onChange={handleChange}
                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-10 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="CC">CC</option>
                    <option value="BCC">BCC</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              </div>
              <div className="w-3/4">
                <div className="mb-4">
                  <input
                    type="text"
                    name="toRecipient"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none"
                    required
                  />
                </div>
              </div>

            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="notificationTitle"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Subtitle</label>
              <textarea
                name="message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <TextEditor /><br /><br />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
    {/* <AnnouncementApp /> */}
    <div className="p-4">
      <h1 className="text-title-md1.5 font-semibold text-black dark:text-white mb-4">Uploading tools</h1>
      {/* Cards Section */}
      <div className="grid grid-cols-4 gap-4">
        {["Announcement", "Events", "News & Programs", "Notifications"].map((category) => (
          <div
            key={category}
            className="bg-[#537F19] text-l text-white p-4 rounded-[5px] cursor-pointer flex flex-col justify-center items-center py-10 hover:bg-[#4b7317] transition"
            onClick={() => openModal(category)}
          >
            {getSVGIcon(category)}
            <p>{category}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 h-3/4 overflow-y-auto z-60">
            <div className="text-lg font-bold mb-4 bg-[#4b7317] text-white p-4">Add {selectedCategory}</div>
            <form onSubmit={handleSubmit}>
              {getModalContent()}
              <div className="flex justify-end mt-5">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 px-4 py-2 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#4b7317] text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* Submitted Data Table */}
      {/* <div className="mt-6">
        {submittedData.length > 0 && (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">File</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{data.category}</td>
                  <td className="border px-4 py-2">{data.title || data.headline || data.notificationTitle}</td>
                  <td className="border px-4 py-2">{data.description || data.summary || data.message}</td>
                  <td className="border px-4 py-2">
                    {data.file ? data.file.name : "No file uploaded"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div> */}
      <TableCarousel />
    </div>
    </>
  );
};

export default PostButtons;

