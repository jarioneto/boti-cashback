import React, { useState } from 'react';

// Components
import Card from 'components/Card';
import Loader from 'components/Loader';

// Third party
import InfiniteScroll from 'react-infinite-scroller';

// Services
import { fetchOrders } from 'services/api';

// Types
import { Order } from 'types';

// Utils
import { getAuth } from 'utils/authentication';

// Styles
import useStyles from './styles';

const List: React.FC = () => {
  const classes = useStyles();

  const limit = 6;

  const [orders, setOrders] = useState<Order[]>([]);
  const [hasMoreOrders, setHasMoreOrders] = useState<boolean>(true);

  const getOrders = (page: number) => {
    if (!hasMoreOrders) {
      return;
    }

    const user = getAuth();

    fetchOrders({
      userId: user.id,
      page,
      limit
    }).then((response) => {
      const total = response.headers?.['x-total-count'] ?? 0;
      const newOrders = response.data;

      const hasMore = total > page * limit;

      if (!hasMore) {
        setHasMoreOrders(false);
      }

      setOrders((currentOrders) => [...currentOrders, ...newOrders]);
    });
  };

  return (
    <div className={classes.list}>
      <InfiniteScroll
        pageStart={0}
        hasMore={hasMoreOrders}
        loadMore={getOrders}
        loader={<Loader key={0} />}
      >
        {orders.map((order) => (
          <Card key={order.id} order={order} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default List;
