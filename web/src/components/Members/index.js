import React from 'react';

import { Container, Member, Username, LastMessage } from './styles';

function Members() {
  const list = [
    {
      id: 1,
      username: 'Cloud',
      lastMessage: 'bla bla bla'
    },
    {
      id: 2,
      username: 'John Doe',
      lastMessage: 'bla bla bla'
    }
  ];

  return (
    <Container>
      <div>
        <input placeholder="buscar"/>
      </div>
      {list.map(item => (
        <Member key={item.id}>
          <Username>{item.username}</Username>
          <LastMessage>{item.lastMessage}</LastMessage>
        </Member>
      ))}
    </Container>
  );
}

export default Members;