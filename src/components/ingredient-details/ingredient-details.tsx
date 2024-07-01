import { FC } from 'react';
import { Preloader, IngredientDetailsUI } from '@ui';
import { useParams } from 'react-router-dom';
import { useSelector } from '@store';
import { selectorIngredients } from '../../services/slices/ingredients';

export const IngredientDetails: FC = () => {
  const { id } = useParams();

  const ingredientData = useSelector(selectorIngredients).find(
    (item) => item._id === id
  );

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
