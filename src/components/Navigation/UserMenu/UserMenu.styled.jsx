import styled from '@emotion/styled';

export const UserName = styled.p`
  display: block;
  font-size: 25px;
  font-weight: 700;
  padding: 5px 10px;
  color: rgb(16, 16, 144);
  margin: 0;
`;

export const UserLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #dffcdf;
  overflow: hidden;

  & > svg {
    position: absolute;
    top: 8px;
    fill: #040475;
  }
`;

export const LogOutBtn = styled.button`
  font-family: inherit;
  font-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 25px;

  color: #ffffff;
  background-color: ${props => (!props.isLoading ? '#ef9292' : '#ca1010')};
  /* background-color: #ef9292; */
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: scale 150ms ease-in-out, background-color 150ms ease-in-out;

  &:hover {
    transform: scale(1.01);
    background-color: #ca1010;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
