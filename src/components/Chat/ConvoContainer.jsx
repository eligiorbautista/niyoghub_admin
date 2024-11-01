import { useState, useRef } from 'react';

function ConvoContainer() {
  const [activeConversation, setActiveConversation] = useState(null);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Henry Dholi',
      lastMessage: 'I came across your profile and...',
      imageUrl: 'https://placehold.it/50x50',
    },
    {
      id: 2,
      name: 'Mariya Desoja',
      lastMessage: 'I like your confidence 💪',
      imageUrl: 'https://placehold.it/50x50',
    },
    {
      id: 3,
      name: 'Robert Jhon',
      lastMessage: 'Can you share your offer?',
      imageUrl: 'https://placehold.it/50x50',
    },
    {
      id: 4,
      name: 'Cody Fisher',
      lastMessage: "I'm waiting for your response!",
      imageUrl: 'https://placehold.it/50x50',
    },
    {
      id: 5,
      name: 'Isla Runin',
      lastMessage: "Hello!",
      imageUrl: 'https://placehold.it/50x50',
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'user',
      text: 'Hello, Thomas! I will check the schedule and inform you',
      time: '1:55pm',
    },
    {
      id: 2,
      sender: 'Andri Thomas',
      text: 'Ok, Thanks for your reply.',
      time: '1:55pm',
    },
    {
      id: 3,
      sender: 'user',
      text: 'You are welcome!',
      time: '1:55pm',
    },
    {
      id: 4,
      sender: 'Andri Thomas',
      text: 'Okay!',
      time: '1:56pm',
    },
  ];

  const handleConversationClick = (conversation) => {
    setActiveConversation(conversation);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Message submitted:', message);
    setMessage('');
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      console.log('Selected file:', files[0]); // Handle the selected file as needed
    }
  };


  return (
    <div className="flex w-full bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 shadow-lg border-r">
        <div>
          <div className="p-6 border-b bg-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-bold text-black">Conversations</h2>
            <span className="rounded-md border-stroke bg-white py-0.8 px-4 text-base font-medium text-black dark:border-strokedark dark:bg-boxdark-2 dark:text-white">
              {conversations.length}
            </span>
          </div>
        </div>

        <div className="p-4">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:bg-white-100 placeholder-gray-400 text-black"
          />
        </div>
        <ul className="overflow-auto max-h-[calc(100vh-150px)]">
          {conversations.map((conversation) => (
            <li
              key={conversation.id}
              className={`p-4 cursor-pointer hover:bg-gray-100 transition ${
                activeConversation?.id === conversation.id ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleConversationClick(conversation)}
            >
              <div className="flex items-center">
                <img
                  src={conversation.imageUrl}
                  alt={conversation.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-medium text-black">{conversation.name}</h3>
                  <p className="text-sm text-black truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>


      {/* Chat window */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat header */}
        {activeConversation && (
          <div className="p-4 bg-gray-200 border-b shadow-md">
            <div className="px-2 bg-gray-200 flex justify-between items-center">
              <div className="flex items-center text-black">
                <img
                  src={activeConversation.imageUrl}
                  alt={activeConversation.name}
                  className="w-12 h-12 rounded-full mr-3 text-black"
                />
                <div>
                  <h2 className="font-bold text-gray-900">{activeConversation.name}</h2>
                  <p className="text-sm text-gray-600 text-black">
                    Last message: {activeConversation.lastMessage}
                  </p>
                </div>
              </div>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="18" viewBox="0 0 7 19" fill="none">
                  <path d="M3 3.21703C3.72487 3.21703 4.3125 2.80817 4.3125 2.30383C4.3125 1.79948 3.72487 1.39062 3 1.39062C2.27513 1.39062 1.6875 1.79948 1.6875 2.30383C1.6875 2.80817 2.27513 3.21703 3 3.21703Z" fill="black"/>
                  <path d="M3 9.91429C3.72487 9.91429 4.3125 9.50544 4.3125 9.00109C4.3125 8.49674 3.72487 8.08789 3 8.08789C2.27513 8.08789 1.6875 8.49674 1.6875 9.00109C1.6875 9.50544 2.27513 9.91429 3 9.91429Z" fill="black"/>
                  <path d="M3 16.6106C3.72487 16.6106 4.3125 16.2017 4.3125 15.6974C4.3125 15.193 3.72487 14.7842 3 14.7842C2.27513 14.7842 1.6875 15.193 1.6875 15.6974C1.6875 16.2017 2.27513 16.6106 3 16.6106Z" fill="black"/>
                </svg>
              </button> 
            </div>
          </div>
        )}

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div
                className={`p-3 rounded-md shadow-md max-w-[80%] bg-white`}
              >
                <p className="text-sm">{message.text}</p>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chat input */}
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md flex items-center text-black">
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message here..."
            className="flex-grow px-4 py-2 border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <button
            type="button"
            className="p-4 bg-green-900 mr-2 text-white-500 hover:text-blue-500"
            onClick={handleButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="10"
              viewBox="0 0 20 10"
              fill="none"
            >
              <path
                d="M6.06889 9.5C4.38593 9.5 2.9537 9.0656 1.77222 8.1968C0.59074 7.32744 0 6.26434 0 5.00749C0 3.75176 0.59074 2.68644 1.77222 1.81153C2.9537 0.936622 4.38593 0.499445 6.06889 0.500001H15.7689C16.9444 0.500001 17.9433 0.803109 18.7656 1.40933C19.5878 2.01554 19.9993 2.75888 20 3.63934C20.0007 4.5198 19.5896 5.26314 18.7667 5.86936C17.9437 6.47557 16.9444 6.77813 15.7689 6.77702H6.58111C5.92926 6.77702 5.36741 6.60659 4.89556 6.26573C4.4237 5.92487 4.18778 5.50907 4.18778 5.01832C4.18778 4.52757 4.42 4.10566 4.88444 3.75259C5.34889 3.39952 5.91444 3.22298 6.58111 3.22298H15.8122V4.0557H6.58111C6.2263 4.0557 5.92407 4.14674 5.67445 4.32883C5.42482 4.51092 5.29963 4.73464 5.29889 5C5.29815 5.26536 5.42333 5.48936 5.67445 5.672C5.92556 5.85464 6.22778 5.94569 6.58111 5.94513H15.7911C16.6541 5.9418 17.3859 5.71947 17.9867 5.27813C18.5881 4.83623 18.8889 4.28997 18.8889 3.63934C18.8889 2.99371 18.5848 2.44772 17.9767 2.00139C17.3685 1.55561 16.6326 1.33272 15.7689 1.33272H6.06889C4.69704 1.32994 3.52778 1.68607 2.56111 2.40109C1.59444 3.11667 1.11111 3.98769 1.11111 5.01416C1.11111 6.02618 1.59444 6.88666 2.56111 7.59558C3.52778 8.3045 4.69704 8.66173 6.06889 8.66728H15.8122V9.5H6.06889Z"
                fill="white"
              />
            </svg>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }} 
          />
          <button
            type="submit"
            className="bg-green-900 text-white px-4 py-2 rounded-r-md hover:bg-#537F19-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConvoContainer;
