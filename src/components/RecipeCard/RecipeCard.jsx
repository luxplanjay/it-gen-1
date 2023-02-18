import PropTypes from 'prop-types';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BsBarChart } from 'react-icons/bs';
import { RxTimer } from 'react-icons/rx';
import {
  Container,
  Image,
  RecipeInfo,
  InfoBlock,
  BadgeList,
  Badge,
} from './RecipeCard.styled';

export const RecipeCard = ({
  recipe: { name, time, servings, calories, image, difficulty },
}) => {
  return (
    <Container>
      <Image src={image} alt={name} />
      <h2>{name}</h2>

      <RecipeInfo>
        <InfoBlock alignItems="center">
          <RxTimer />
          {time} min
        </InfoBlock>
        <InfoBlock alignItems="center">
          <AiOutlinePieChart />
          {servings} servings
        </InfoBlock>
        <InfoBlock alignItems="center">
          <BsBarChart />
          {calories} calories
        </InfoBlock>
      </RecipeInfo>

      <div>
        <h3>Difficulty</h3>
        <BadgeList>
          <Badge isActive={difficulty === 'easy'} value={difficulty}>
            Easy
          </Badge>
          <Badge isActive={difficulty === 'medium'} value={difficulty}>
            Medium
          </Badge>
          <Badge isActive={difficulty === 'hard'} value={difficulty}>
            Hard
          </Badge>
        </BadgeList>
      </div>
    </Container>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
