import styled from 'styled-components';

const HeaderStyled = styled.div`
  background-color: #414141;
  height: 10vh;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 12px;
  h1 {
    font-weight: 400;
    font-size: 1.8rem;
  }
`;

const PageHeader = ({ text }) => {
  return (
    <HeaderStyled>
      <h1>{text}</h1>
    </HeaderStyled>
  );
};

export default PageHeader;
