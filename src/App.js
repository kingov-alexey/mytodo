
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

function App() {
  return (
    <div>
      <Header header="TODO"/>
      <Content />
      <Footer creator="Creator: Kingov Alexey"/>

    </div>
  );
}

export default App;
