

import Footer from './Routes/Footer';
import AppRoutes from './Utility/AppRoutes';
import ContextApi from "./Utility/ContextStore/ContextApi"

function App() {
  return (
    <div>
      <ContextApi>
      <AppRoutes/>
      <Footer/>
      </ContextApi>


    </div>
  );
}

export default App;





