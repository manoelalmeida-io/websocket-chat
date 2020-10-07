import React from 'react';

import { Application, ChatContainer } from './style';

import Members from './components/Members';
import Chat from './components/Chat';

function App() {

  return (
    <Application>
      <ChatContainer>
        <Members/>
        <Chat/>
      </ChatContainer>
    </Application>
  );
}

export default App;
