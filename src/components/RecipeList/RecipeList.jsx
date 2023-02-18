import PropTypes from 'prop-types';
import { RecipeCard } from 'components/RecipeCard/RecipeCard';
import { List, ListItem } from './RecipeList.styled';

export const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map(recipe => (
        <ListItem key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </ListItem>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
