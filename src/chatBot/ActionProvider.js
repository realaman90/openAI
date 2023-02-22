import React, { useState } from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleGreeting = async (inputMessage) => {
    const url = `/api/openAI?message=${encodeURIComponent(inputMessage)}`;
    const response = await fetch(url);
    const data = await response.json();

    const outputMessage = createChatBotMessage(data.message.text);

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, outputMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGreeting,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
