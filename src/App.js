import './App.css';
import ItemDetailContainer from './components/ItemDetailcontainer';
import ItemListContainer from './components/ItemListContainer';
import Layout from './components/Layout.jsx';

function App() {
  return (
    <div className="App">
      <Layout/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
