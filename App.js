import './App.css'; //do css je potom potrebne doplnit vsetky styly pre konecny vzhlad 
import Filter from './Filter'; //Filter komponent, potrebne upravit, aby odpovedalo predlohe
import MainTable from './MainTable'; //MainTable komponent s hlavnou tabulkou, potrebne doplnit stlpce

export default function App() {
  return (
    <div className="App">
      <h3>Prehľad produkcie</h3>
      <Filter/>
      <MainTable/>
      
    </div>
  );
}
