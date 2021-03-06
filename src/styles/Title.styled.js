import styled from 'styled-components';

export const StyledTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: -0.1rem;
  margin: 3rem 0 1rem;
`;

export const StyledCenteredTitle = styled(StyledTitle)`
  text-align: center;
`;

export const StyledSubtitle = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray};
  margin: 1rem;
`;

export const StyledCenteredSubtitle = styled(StyledSubtitle)`
  text-align: center;
`;
