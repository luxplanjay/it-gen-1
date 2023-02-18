import styled from 'styled-components';
import { Flex } from 'components/Flex';

export const Container = styled.div`
  height: 100%;
  padding: 8px;
  border: ${props => {
    return `1px solid ${props.theme.colors.black}`;
  }};
  border-radius: ${props => props.theme.borderRadii.md};
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const RecipeInfo = styled(Flex)`
  gap: 8px;
`;

export const InfoBlock = styled(Flex)`
  gap: 4px;
  font-weight: 500;
`;

export const BadgeList = styled.div`
  display: flex;
  gap: 8px;
`;

export const Badge = styled.span`
  padding: 8px 16px;
  border: ${props => {
    return `1px solid ${props.theme.colors.black}`;
  }};
  border-radius: ${props => props.theme.borderRadii.sm};

  background-color: ${({ theme, isActive, value }) => {
    if (!isActive) {
      return theme.colors.white;
    }

    switch (value) {
      case 'easy':
        return theme.colors.green;
      case 'medium':
        return theme.colors.blue;
      case 'hard':
        return theme.colors.red;
      default:
        throw new Error(`Unknown recipe difficulty - ${value}`);
    }
  }};

  color: ${({ theme, isActive }) => {
    return isActive ? theme.colors.white : theme.colors.black;
  }};
`;

// export const Badge = styled.span`
//   padding: 8px 16px;
//   border: ${props => {
//     return `1px solid ${props.theme.colors.black}`;
//   }};
//   border-radius: ${props => props.theme.borderRadii.sm};

//   background-color: ${({ theme, isActive }) => {
//     return isActive ? theme.colors.red : theme.colors.white;
//   }};

//   color: ${({ theme, isActive }) => {
//     return isActive ? theme.colors.white : theme.colors.black;
//   }};
// `;
