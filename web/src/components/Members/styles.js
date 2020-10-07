import styled from 'styled-components';

export const Container = styled.div`

  > div {
    width: 200px;
    padding: 16px;
  }
`;

export const Member = styled.div`
  :hover {
    background-color: #00000022;
    cursor: pointer;
  }
`;

export const Username = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const LastMessage = styled.div`
  color: #757575;
  font-size: 14px;
`;