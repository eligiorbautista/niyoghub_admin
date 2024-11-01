import { useState } from 'react';

const AnnouncementApp = () => {
  const [showModal, setShowModal] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Submit form and add new announcement
  const handleSubmit = (e) => {
    e.preventDefault();
    setAnnouncements([...announcements, formData]);
    setFormData({ title: '', description: '', image: null });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Card button */}
      {/* <div className="max-w-sm mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Announcements</h2>
          <button 
            onClick={() => setShowModal(true)} 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Announcement
          </button>
        </div>
      </div> */}

      <div className="grid grid-cols-4 gap-4">
        {/* {["Announcement"].map((category) => ( */}
          
          <div
            // key={category}
            className="bg-[#537F19] text-l text-white p-4 rounded-[5px] cursor-pointer flex flex-col justify-center items-center py-10 hover:bg-[#4b7317] transition"
            onClick={() => setShowModal(true)}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Announcements</h2>
            {/* {getSVGIcon(category)} */}
            {/* <p>{category}</p> */}
          </div>
        {/* ))} */}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Add New Announcement</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter title"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter description"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Save Announcement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Announcements Table */}
      <div className="mt-8">
        {announcements.length > 0 ? (
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Image</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((announcement, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{announcement.title}</td>
                  <td className="py-2 px-4 border-b">{announcement.description}</td>
                  <td className="py-2 px-4 border-b">
                    {announcement.image && (
                      <img
                        src={URL.createObjectURL(announcement.image)}
                        alt={announcement.title}
                        className="h-16 w-16 object-cover rounded"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600">No announcements yet.</p>
        )}
      </div>
    </div>
  );
};

export default AnnouncementApp;
