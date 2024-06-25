<<<<<<< HEAD
import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC } from 'react';

export const ProfileOrders: FC = () => {
  /** TODO: взять переменную из стора */
  const orders: TOrder[] = [];

  return <ProfileOrdersUI orders={orders} />;
};
=======
import { FC } from 'react';

export const ProfileOrders: FC = () =>
  // return <ProfileOrdersUI orders={orders} />;

  null;
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e
