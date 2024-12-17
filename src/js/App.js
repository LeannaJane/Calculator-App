import '../css/App.css';
import Calculator from './Calculator-Component';
import DisableZoom from './Zoom';

function App() {
  return (
    <div className="App">
      <DisableZoom />
      <h1>React Calculator App</h1>
      <Calculator/>
    </div>
  );
}

export default App;
