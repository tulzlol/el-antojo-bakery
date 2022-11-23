import './App.css';
import ItemDetailContainer from './components/ItemDetailcontainer';
import ItemListContainer from './components/ItemListContainer';
import { Layout } from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
      <ItemListContainer/>
      <ItemDetailContainer/>
      </Layout>
    </div>
  );
}

export default App;
