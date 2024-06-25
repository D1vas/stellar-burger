import { FC } from 'react';

import { TOrder } from '@utils-types';
<<<<<<< HEAD
import { FeedInfoUI } from '../ui/feed-info';
=======
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e

const getOrders = (orders: TOrder[], status: string): number[] =>
  orders
    .filter((item) => item.status === status)
    .map((item) => item.number)
    .slice(0, 20);

<<<<<<< HEAD
export const FeedInfo: FC = () => {
  /** TODO: взять переменные из стора */
  const orders: TOrder[] = [];
  const feed = {};

  const readyOrders = getOrders(orders, 'done');

  const pendingOrders = getOrders(orders, 'pending');

  return (
    <FeedInfoUI
      readyOrders={readyOrders}
      pendingOrders={pendingOrders}
      feed={feed}
    />
  );
};
=======
export const FeedInfo: FC = () =>
  // const readyOrders = getOrders(orders, 'done');

  // const pendingOrders = getOrders(orders, 'pending');

  // return (
  //   <FeedInfoUI
  //     readyOrders={readyOrders}
  //     pendingOrders={pendingOrders}
  //     feed={feed}
  //   />
  // );

  null;
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e
