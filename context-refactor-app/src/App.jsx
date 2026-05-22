import Dashboard from "./components/Dashboard";

import { UserProvider } from "./context/UserContext";

function App() {

  return (

    <UserProvider>

      <div className="app">

        <Dashboard />

      </div>

    </UserProvider>

  );

}

export default App