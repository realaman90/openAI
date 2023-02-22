import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './BotAvatar'
import React from 'react';

const botName = 'Aman';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I am ${botName}. What can I help you with?`)],
  botName: botName,
    customStyles: {
    botMessageBox: {
        backgroundColor: "#376B7E",
    },
    chatButton: {
        backgroundColor: "#376B7E",
    },
    
    
},
// customComponents: {
//     // Replaces the default header
   
//    // Replaces the default bot avatar
//    botAvatar: (props) => <BotAvatar {...props} />,
//    // Replaces the default bot chat message container
// //    botChatMessage: (props) => <CustomChatMessage {...props} />,
// //    // Replaces the default user icon
// //    userAvatar: (props) => <MyUserAvatar {...props} />,
// //    // Replaces the default user chat message
// //    userChatMessage: (props) => <MyUserChatMessage {...props} />
//  },

};

export default config;