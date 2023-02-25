import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar, HiTrash, HiZoomIn } from 'react-icons/hi';
import {
  Container,
  Image,
  Meta,
  RecipeInfo,
  InfoItem,
  RecipeDifficulty,
  Badge,
  Title,
  Actions,
} from './RecipeCard.styled';

export const RecipeCard = ({
  recipe: { id, name, image, time, servings, calories, difficulty },
}) => {
  return (
    <Container>
      <Image src={image} alt={name} />
      <Meta>
        <Title>{name}</Title>

        <RecipeInfo>
          <InfoItem>
            <BsAlarm size="20" />
            {time} min
          </InfoItem>
          <InfoItem>
            <AiOutlinePieChart size="20" />
            {servings} servings
          </InfoItem>
          <InfoItem>
            <HiOutlineChartBar size="20" />
            {calories} calories
          </InfoItem>
        </RecipeInfo>

        <RecipeDifficulty>
          <Badge isActive={difficulty === 'easy'} value={difficulty}>
            Easy
          </Badge>
          <Badge isActive={difficulty === 'medium'} value={difficulty}>
            Medium
          </Badge>
          <Badge isActive={difficulty === 'hard'} value={difficulty}>
            Hard
          </Badge>
        </RecipeDifficulty>

        <Actions>
          <button aria-label="Delete">
            <HiTrash />
          </button>
          <button aria-label="Zoom">
            <HiZoomIn />
          </button>
        </Actions>
      </Meta>
    </Container>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
