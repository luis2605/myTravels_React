
import './App.css';
import Header from './header';
import Card from './cards';
import data from './data';

function App() {
  const card =data.map(item =>{
    return(
      <Card
      key ={item.id}
      item={item}
      />
    )
  })
  return (
    <div className="App">
     <Header/>
     {card}
    </div>
  );
}

export default App;
