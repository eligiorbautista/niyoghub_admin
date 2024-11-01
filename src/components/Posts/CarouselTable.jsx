import { useState } from "react";

const TableCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    {
      title: "Announcements",
      data: [
        {
          title: "NCFRS Registration",
          type: "Announcement",
          date: "4-10-24",
          dateModified: "-",
          action: "View",
        },
      ],
    },
    {
      title: "Events",
      data: [
        {
          title: "Annual Conference",
          type: "Events",
          date: "12-12-24",
          dateMpodified: "12-13-24",
          action: "Register",
        },
      ],
    },
    {
      title: "News and Programs",
      data: [
        {
          title: "Program Launch",
          type: "News and Programs",
          date: "5-11-24",
          dateModified: "5-17-24",
          action: "Read More",
        },
      ],
    },
    {
      title: "Notification",
      data: [
        {
          notification: "System Update",
          type: "System",
          date: "7-9-24",
          dateModified: "7-29-24",
          action: "Details",
        },
      ],
    },
    {
      title: "Archive",
      data: [
        {
          title: "Old Announcement",
          dateArchived: "1-1-23",
          type: "Announcement",
          action: "View",
        },
      ],
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="text-title-md1.5 p-4">
      <div className="mb-4 relative">
        <div className="flex justify-between items-center max-w-full overflow-x-auto">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-white rounded hover:bg-gray-300 focus:outline-none"
          >
            Prev
          </button>
          <h2 className="text-xl font-semibold">{categories[activeIndex].title}</h2>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-white rounded hover:bg-gray-300 focus:outline-none"
          >
            Next
          </button>
        </div>

        <div className="max-w-full overflow-x-auto">
          {activeIndex === 0 && (
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Title of Announcement</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Type</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Date</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Date Modified</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories[activeIndex].data.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-2 border">{item.title}</td>
                    <td className="px-4 py-2 border">{item.type}</td>
                    <td className="px-4 py-2 border">{item.date}</td>
                    <td className="px-4 py-2 border">{item.dateModified}</td>
                    <td className="px-4 py-2 border">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeIndex === 1 && (
            <table className="min-w-full bg-white border text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Event Name</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Type</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Date</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Date Modified</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories[activeIndex].data.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-2 border">{item.title}</td>
                    <td className="px-4 py-2 border">{item.type}</td>
                    <td className="px-4 py-2 border">{item.date}</td>
                    <td className="px-4 py-2 border">{item.datModified}</td>
                    <td className="px-4 py-2 border">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeIndex === 2 && (
            <table className="min-w-full bg-white border text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Title of News and Programs</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Type</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Date</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Date Modified</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories[activeIndex].data.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-2 border">{item.title}</td>
                    <td className="px-4 py-2 border">{item.type}</td>
                    <td className="px-4 py-2 border">{item.date}</td>
                    <td className="px-4 py-2 border">{item.dateModified}</td>
                    <td className="px-4 py-2 border">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeIndex === 3 && (
            <table className="min-w-full bg-white border text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Notification</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Type</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Date</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Date Modified</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories[activeIndex].data.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-2 border">{item.notification}</td>
                    <td className="px-4 py-2 border">{item.type}</td>
                    <td className="px-4 py-2 border">{item.date}</td>
                    <td className="px-4 py-2 border">{item.dateModified}</td>
                    <td className="px-4 py-2 border">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeIndex === 4 && (
            <table className="min-w-full bg-white border text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Title</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Date Archived</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Date Modified</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Type</th>
                  <th className="px-4 py-2 border bg-[#4b7317] text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories[activeIndex].data.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-2 border">{item.title}</td>
                    <td className="px-4 py-2 border">{item.dateArchived}</td>
                    <td className="px-4 py-2 border">{item.dateModified}</td>
                    <td className="px-4 py-2 border">{item.type}</td>
                    <td className="px-4 py-2 border">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableCarousel;