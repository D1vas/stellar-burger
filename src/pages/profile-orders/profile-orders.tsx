import { ProfileOrdersUI } from '@ui-pages';
import { fetchOrders } from '@slices';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '@store';

export const ProfileOrders: FC = () => {
  /** TODO: взять переменную из стора */
  const dispatch = useDispatch();
  const { data: orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }),
    [dispatch];

  return <ProfileOrdersUI orders={orders} />;
};
