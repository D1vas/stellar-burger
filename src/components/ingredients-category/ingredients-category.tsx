<<<<<<< HEAD
import { forwardRef, useMemo } from 'react';
import { TIngredientsCategoryProps } from './type';
import { TIngredient } from '@utils-types';
import { IngredientsCategoryUI } from '../ui/ingredients-category';
=======
import { forwardRef } from 'react';
import { TIngredientsCategoryProps } from './type';
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e

export const IngredientsCategory = forwardRef<
  HTMLUListElement,
  TIngredientsCategoryProps
<<<<<<< HEAD
>(({ title, titleRef, ingredients }, ref) => {
  /** TODO: взять переменную из стора */
  const burgerConstructor = {
    bun: {
      _id: ''
    },
    ingredients: []
  };

  const ingredientsCounters = useMemo(() => {
    const { bun, ingredients } = burgerConstructor;
    const counters: { [key: string]: number } = {};
    ingredients.forEach((ingredient: TIngredient) => {
      if (!counters[ingredient._id]) counters[ingredient._id] = 0;
      counters[ingredient._id]++;
    });
    if (bun) counters[bun._id] = 2;
    return counters;
  }, [burgerConstructor]);

  return (
    <IngredientsCategoryUI
      title={title}
      titleRef={titleRef}
      ingredients={ingredients}
      ingredientsCounters={ingredientsCounters}
      ref={ref}
    />
  );
});
=======
>(
  ({ title, titleRef, ingredients }, ref) =>
    // const ingredientsCounters = useMemo(() => {
    //   const counters: { [key: string]: number } = {};
    //   ingredients.forEach((ingredient: TIngredient) => {
    //     if (!counters[ingredient._id]) counters[ingredient._id] = 0;
    //     counters[ingredient._id]++;
    //   });
    //   if (bun) counters[bun._id] = 2;
    //   return counters;
    // }, [burgerConstructor]);

    // <IngredientsCategoryUI
    //   title={title}
    //   titleRef={titleRef}
    //   ingredients={ingredients}
    //   ingredientsCounters={ingredientsCounters}
    //   ref={ref}
    // />

    null
);
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e
