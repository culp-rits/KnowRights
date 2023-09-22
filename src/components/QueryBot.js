import React, { useState } from 'react';
function QueryBot() {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleImageClick = async () => {
    try {
      console.log("clicked");
      const response = await fetch('http://localhost:1812/openai/AnswerWithAPinchOfSalt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: inputText,
        }),
      });
      if (!response.ok) {
        throw new Error('cannot access the server');
      }
      const answer = await response.json();
      setResponseText(answer.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="font-russo-one w-4/5 h-9/10 mx-auto my-10 rounded-31xl [background:linear-gradient(180deg,_#d6bcfa,_#a3bffa)] justify-center pb-20">
      <div className='flex items-center bg-white rounded-31xl justify-center p-0 m-0'>
        <img src="/vector3.svg" alt="" />
        <h2 className='text-darkblue text-17xl'>QueryBot</h2>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex items-center w-2/3 bg-white rounded-11xl p-2 mt-16'>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className="font-russo-one text-slate-500 border-none w-full text-5xl"
          />
          <img
            src="/send-fill0-wght400-grad0-opsz24-1.svg"
            alt=""
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className='bg-white mt-5 w-2/3 p-2 rounded-lg'>
          <textarea
            rows="8"
            readOnly
            value={responseText}
            className="font-russo-one text-darkblue border-none w-full text-5xl"
          />
        </div>
      </div>
    </div>
  );
}

export default QueryBot;
