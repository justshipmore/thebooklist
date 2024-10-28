import { Library } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ListItemsGrid from '@/features/list/components/list-items-grid';

const Navbar = () => (
  <div className="flex w-full justify-between items-center p-8">
    <Link to="/">
      <div className="text-lg font-medium flex gap-x-3 items-center">
        <Library />
        The Book List
      </div>
    </Link>

    <div className="flex gap-x-4 items-center">
      <Link to="/auth/signin">Login</Link>
      <Link to="/auth/signup">
        <Button>Sign Up</Button>
      </Link>
    </div>
  </div>
);

const Tabs = () => (
  <section className="flex w-full items-center px-8 pb-8 gap-x-4">
    <Button variant="secondary">✨ Trending Books</Button>
    <Button variant="ghost">🔥 Trending Lists</Button>
  </section>
);

export default function ExplorePage() {
  return (
    <>
      <Navbar />
      <Tabs />
      <ListItemsGrid />
    </>
  );
}
