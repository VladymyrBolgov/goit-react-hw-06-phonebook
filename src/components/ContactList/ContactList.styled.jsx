import styled from '@emotion/styled';

export const ContactListBox = styled.ul`
  margin-top: 20px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const ContactListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc((100% - 60px) / 4);
`;

export const ContactListText = styled.p`
  margin-bottom: 15px;
`;

export const ContactListBtn = styled.button`
  display: block;
  width: 100px;
  height: 30px;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 5px;
  background-color: tomato;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.03),
    1px 4px 6px rgba(0, 0, 0, 0.08);
  transition: scale 250ms linear, background-color 250ms linear,
    color 250ms linear;

  :hover,
  :focus {
    background-color: red;
    color: #e1e4e9;
    scale: 1.1;
  }
`;
