import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen">
      <Sidebar />
      <div className="w-full md:overflow-y-auto bg-slate-50">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
