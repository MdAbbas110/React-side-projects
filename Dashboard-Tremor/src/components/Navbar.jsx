import { TextInput } from '@tremor/react';
import { SearchIcon } from '@heroicons/react/solid';
const Navbar = () => {
  return (
    <nav
      id="top"
      className="relative w-full sm:flex justify-between items-center"
    >
      <h1 className="font-bold text-gray-300">Dashboard</h1>
      <div className="py-2">
        <TextInput icon={SearchIcon} placeholder="Search..." />
      </div>
    </nav>
  );
};

export default Navbar;
