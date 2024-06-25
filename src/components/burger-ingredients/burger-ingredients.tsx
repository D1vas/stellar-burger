import { useState, useRef, useEffect, FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { TTabMode } from '@utils-types';
<<<<<<< HEAD
import { BurgerIngredientsUI } from '../ui/burger-ingredients';
import { selectorIngredients } from '../../services/slices/ingredients/index';
import { useSelector } from '../../services/store/store';

export const BurgerIngredients: FC = () => {
  const ingredients = useSelector(selectorIngredients);
  const buns = ingredients.filter((item) => item.type === 'bun');
  const mains = ingredients.filter((item) => item.type === 'main');
  const sauces = ingredients.filter((item) => item.type === 'sauce');

=======

export const BurgerIngredients: FC = () => {
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e
  const [currentTab, setCurrentTab] = useState<TTabMode>('bun');
  const titleBunRef = useRef<HTMLHeadingElement>(null);
  const titleMainRef = useRef<HTMLHeadingElement>(null);
  const titleSaucesRef = useRef<HTMLHeadingElement>(null);

  const [bunsRef, inViewBuns] = useInView({
    threshold: 0
  });

  const [mainsRef, inViewFilling] = useInView({
    threshold: 0
  });

  const [saucesRef, inViewSauces] = useInView({
    threshold: 0
  });

  useEffect(() => {
    if (inViewBuns) {
      setCurrentTab('bun');
    } else if (inViewSauces) {
      setCurrentTab('sauce');
    } else if (inViewFilling) {
      setCurrentTab('main');
    }
  }, [inViewBuns, inViewFilling, inViewSauces]);

<<<<<<< HEAD
=======
  /* В можно лучше: скролл к разделу при клике на таб */
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e
  const onTabClick = (tab: string) => {
    setCurrentTab(tab as TTabMode);
    if (tab === 'bun')
      titleBunRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (tab === 'main')
      titleMainRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (tab === 'sauce')
      titleSaucesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

<<<<<<< HEAD
  return (
    <BurgerIngredientsUI
      currentTab={currentTab}
      buns={buns}
      mains={mains}
      sauces={sauces}
      titleBunRef={titleBunRef}
      titleMainRef={titleMainRef}
      titleSaucesRef={titleSaucesRef}
      bunsRef={bunsRef}
      mainsRef={mainsRef}
      saucesRef={saucesRef}
      onTabClick={onTabClick}
    />
  );
=======
  // return (
  //   <BurgerIngredientsUI
  //     currentTab={currentTab}
  //     buns={buns}
  //     mains={mains}
  //     sauces={sauces}
  //     titleBunRef={titleBunRef}
  //     titleMainRef={titleMainRef}
  //     titleSaucesRef={titleSaucesRef}
  //     bunsRef={bunsRef}
  //     mainsRef={mainsRef}
  //     saucesRef={saucesRef}
  //     onTabClick={onTabClick}
  //   />
  // );

  return null;
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e
};
