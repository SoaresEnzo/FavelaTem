import Rotas from './componentes/rotas';

import {BrowserRouter} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Rotas/>
      </div>
    </BrowserRouter>

  );
}

export default App;
