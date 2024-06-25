<<<<<<< HEAD
import { useSelector } from '../../services/store/store';
=======
import { useSelector } from '../../services/store';
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e

import styles from './constructor-page.module.css';

import { BurgerIngredients } from '../../components';
import { BurgerConstructor } from '../../components';
import { Preloader } from '../../components/ui';
import { FC } from 'react';

export const ConstructorPage: FC = () => {
<<<<<<< HEAD
  /** TODO: взять переменную из стора */
  const isIngredientsLoading = false;
=======
  const isIngredientsLoading = useSelector(
    (state) => state.ingredients.isLoading
  );
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e

  return (
    <>
      {isIngredientsLoading ? (
        <Preloader />
      ) : (
        <main className={styles.containerMain}>
          <h1
            className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
          >
            Соберите бургер
          </h1>
          <div className={`${styles.main} pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      )}
    </>
  );
};
