import { Outlet } from "react-router-dom";

function App() {
  return (
    <div >
      {/* all children pages will render here */}
      <Outlet />
    </div>
  );
}

export default App;
