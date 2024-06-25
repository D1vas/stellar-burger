import { FC } from 'react';
<<<<<<< HEAD
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';

export const IngredientDetails: FC = () => {
  /** TODO: взять переменную из стора */
  const ingredientData = null;

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
=======

export const IngredientDetails: FC = () =>
  // if (!ingredientData) {
  //   return <Preloader />;
  // }

  // return <IngredientDetailsUI ingredientData={ingredientData} />;

  null;
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e
