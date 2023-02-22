import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const messageLowerCase = message.toLowerCase();
    actions.handleGreeting(messageLowerCase);

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {
            parse,
            actions
          },
        });
      })}
    </div>
  );
};

export default MessageParser;