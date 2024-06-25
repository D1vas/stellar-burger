<<<<<<< HEAD
import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC } from 'react';

export const Feed: FC = () => {
  /** TODO: взять переменную из стора */
  const orders: TOrder[] = [];

  if (!orders.length) {
    return <Preloader />;
  }

  <FeedUI orders={orders} handleGetFeeds={() => {}} />;
};
=======
import { FC } from 'react';

export const Feed: FC = () =>
  // if (!orders.length) {
  //   return <Preloader />;
  // }

  // return <FeedUI orders={orders} handleGetFeeds={handleGetFeeds} />;

  null;
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e
