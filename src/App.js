
import './App.css';
import data from './data/data'
import Recipe from './components/Recipe';

function App() {
  return (
    /* jsx solo puede retornar un solo elemento, por eso todo tiene que estar dentro de un div, si no, tira error. De igual manera, NO es una buena practica */
    /* Aca aparece "Fragment", el cual ni hay que escribir */
    <main className='container'>
      {data.map((recipe)=>(
        <Recipe key={recipe.id}{...recipe}/>
      ))}
    </main>
  );
}

export default App;
