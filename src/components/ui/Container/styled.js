import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  max-width: ${p => p.maxWidth || 800}px;
  width: 100%;
`;
