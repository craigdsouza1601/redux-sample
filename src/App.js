import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header'
import { useSelector } from 'react-redux';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (<>
  <Header />
  {!isAuth && <Auth />}
  <Counter />
  </>  
  );
}

export default App;
