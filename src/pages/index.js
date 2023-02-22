import { useState } from 'react';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from '../chatBot/ActionProvider';
import MessageParser from '../chatBot/MessageParser';
import config from '../chatBot/config';
import styles from '../styles/Home.module.css';

import { Chatbot } from 'react-chatbot-kit';

export default function Home() {
  return (
    <div>
      <h1>Chatbot</h1>
      <Chatbot
        headerText="Aman"
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}
