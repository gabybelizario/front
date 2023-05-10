import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: center;

  padding: 0 80px;

`;
export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height 56px;
    border-radius: 50%;
  }
`;