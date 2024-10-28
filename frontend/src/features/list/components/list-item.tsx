import { Link } from 'react-router-dom';

const ListItem = () => (
  <Link to="/books/1">
    <div className="w-full">
      <div className="h-96 bg-blue-500 p-8 rounded-lg"></div>
      <div className="flex flex-col py-4">
        <span className="text-muted-foreground">Jane Smith</span>
        <span className="text-lg">The Chronicals of Nania</span>
      </div>
    </div>
  </Link>
);

export default ListItem;
