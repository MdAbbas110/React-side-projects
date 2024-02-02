import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TopRight from './components/TopRight';
import TopCardLeft from './components/TopcardLeft';

function App() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 relative">
        <Navbar />
        <div className="grid md:grid-cols-3 grid-cols-1 w-full">
          <div className="col-span-2">
            <TopCardLeft />
          </div>
          <div className="w-full">
            <TopRight />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
