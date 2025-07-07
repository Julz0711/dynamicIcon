import { DynamicIcon } from "./DynamicIcon";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex gap-8">
        <DynamicIcon name="faCoffee" color="text-blue-600" size={48} />
      </div>
    </div>
  );
}

export default App;
