import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';

/** Estamos utilizando as funções no format de constantes e arrow functions pois
 * este formato facilita a tipificação dos componentes. Neste caso, estamos
 * utilizando o tipo React.FC
 */
const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
