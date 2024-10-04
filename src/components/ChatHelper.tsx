import React, { useState } from 'react';

const ChatHelper: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerateClick = () => {
    setGeneratedText(`Generated text for: ${inputValue}`);
  };

  const handleCopyClick = () => {
    const chatBox = document.querySelector<HTMLElement>('.msg-form__textarea');
    if (chatBox) {
      chatBox.innerText = generatedText;
    }
  };

  return (
    <div>
      <button
        className="fixed bottom-20 right-5 z-50 w-12 h-12 rounded-full bg-blue-600"
        onClick={() => setIsModalOpen(true)}
      >
        <img src="path-to-your-logo.png" alt="Chat Helper" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Generate Response</h2>
            <input
              type="text"
              placeholder="Enter your input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border rounded-md w-full p-2 mb-4"
            />
            <div className="flex justify-between">
              <button
                onClick={handleGenerateClick}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Generate
              </button>
              <button
                onClick={handleCopyClick}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Copy
              </button>
            </div>
            {generatedText && (
              <p className="mt-4 p-2 border bg-gray-100 rounded-md">
                {generatedText}
              </p>
            )}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHelper;
