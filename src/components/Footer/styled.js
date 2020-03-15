import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 24px 0;
  background-color: #222;
  border-top: 1px solid rgba(0, 0, 0, 0.38);
  color: rgba(255, 255, 255, 0.54);
  font-size: 14px;
  line-height: 24px;

  a {
    color: #fff;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-flow: nowrap row;

  @media (max-width: 648px) {
    flex-flow: nowrap column;
  }
`;

export const Left = styled.div`
  margin-right: auto;

  @media (max-width: 648px) {
    margin: 0;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    text-align: center;

    > *:first-child {
      margin-right: 8px;
    }
  }
`;

export const Right = styled.div`
  margin-left: auto;
  text-align: right;

  @media (max-width: 648px) {
    margin: 0;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    text-align: center;

    > *:first-child {
      margin-right: 8px;
    }
  }
`;
