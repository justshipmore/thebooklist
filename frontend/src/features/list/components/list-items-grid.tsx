import ListItem from './list-item';

const ListItemsGrid = () => (
  <div className="grid gap-4 grid-cols-4 px-8 pb-8">
    {[...new Array(10)].map(() => (
      <ListItem />
    ))}
  </div>
);

export default ListItemsGrid;
