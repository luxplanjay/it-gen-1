import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
`;

export const Flex = ({
  as,
  direction = 'row',
  alignItems = 'stretch',
  children,
  className,
}) => {
  return (
    <StyledFlex
      as={as}
      alignItems={alignItems}
      direction={direction}
      className={className}
    >
      {children}
    </StyledFlex>
  );
};
