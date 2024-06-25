import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';

<<<<<<< HEAD
export const BurgerConstructor: FC = () => {
  /** TODO: взять переменные constructorItems, orderRequest и orderModalData из стора */
  const constructorItems = {
    bun: {
      price: 0
    },
    ingredients: []
  };

  const orderRequest = false;

  const orderModalData = null;

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
  };
  const closeOrderModal = () => {};

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return null;

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
=======
export const BurgerConstructor: FC = () =>
  // const onOrderClick = () => {
  // if (!user) {
  //   navigate('/login');
  //   return;
  // }
  // if (!constructorItems.bun || orderRequest) return;
  // };
  // const closeOrderModal = () => {};

  // const price = useMemo(
  //   () =>
  //     (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
  //     constructorItems.ingredients.reduce(
  //       (s: number, v: TConstructorIngredient) => s + v.price,
  //       0
  //     ),
  //   [constructorItems]
  // );

  // return (
  //   <BurgerConstructorUI
  //     price={price}
  //     orderRequest={orderRequest}
  //     constructorItems={constructorItems}
  //     orderModalData={orderModalData}
  //     onOrderClick={onOrderClick}
  //     closeOrderModal={closeOrderModal}
  //   />
  // );

  null;
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e
