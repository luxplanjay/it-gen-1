import { Component } from 'react';
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
import { ImageModal } from 'components/ImageModal/ImageModal';

export class RecipeCard extends Component {
  static propTypes = {
    recipe: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      servings: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    const {
      recipe: { id, name, image, time, servings, calories, difficulty },
      onDelete,
    } = this.props;

    return (
      <Container>
        <ImageModal
          isOpen={isModalOpen}
          image={image}
          onClose={this.closeModal}
        />
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
            <button aria-label="Delete" onClick={() => onDelete(id)}>
              <HiTrash />
            </button>
            <button aria-label="Zoom" onClick={this.openModal}>
              <HiZoomIn />
            </button>
          </Actions>
        </Meta>
      </Container>
    );
  }
}
