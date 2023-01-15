import Card from './components/Card';
import CardBody from './components/CardBody';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Card imgUrl = "https://via.placeholder.com/350x230" alt="Picture alt">
          <CardBody title = "Card title" content = "Some quick example text to build on the card title and make up the bulk of the card's content." link = {{"href" : "https://ya.ru", "linkText" : "Go somewhere"}}>
          </CardBody>          
        </Card>
        <Card>
          <CardBody title = "Card title2" content = "Text to build on the card title and make up the bulk of the card's content quick example." link = {{"href" : "https://ya.ru", "linkText" : "Go somewhere"}}>
          </CardBody>          
        </Card>
      </div>
    </div>
  );
}

export default App;
