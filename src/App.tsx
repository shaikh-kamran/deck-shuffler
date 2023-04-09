import { useEffect, useState } from 'react'
import './App.css'
import CardWrapper from "./components/cardwrapper/CardWrapper";
import { symbols, numbers } from "./data";

function App() {

  const [allcards, setAllCards] = useState<any[]>([]);
  const [randomcards, setRandomCards] = useState<any[]>([]);

  useEffect(() => {
    //Creating an Empty Card Deck
    const cards = new Array(52).fill({});
    setRandomCards([...cards]);
    //Preparing Normal Card Deck
    numbers.forEach(number => {
      symbols.forEach(symbol => {
        if (symbol.name === 'diamond' || symbol.name === 'heart')
          allcards.push({ ...number, ...symbol, color: 'red' });
        else
          allcards.push({ ...number, ...symbol, color: 'black' });
      });
    });
    setAllCards([...allcards]);
  }, []);

  const createRandomDeck = () => {
    var carddeck = JSON.parse(JSON.stringify(allcards));
    //Filling each place with random card from normal Deck
    randomcards.forEach((element, index) => {
      randomcards[index] = getRandomCard(carddeck, index);
    });;
    setRandomCards([...randomcards]);
  }

  const getRandomCard = (carddeck: any, index: number) => {
    //Starting from last Index
    const currentIndex = carddeck.length - index - 1;
    //get a random number between 0 and current pointer
    const randomIndex = getRandomArbitrary(0, currentIndex);
    //swap the random index value and current index value
    [carddeck[currentIndex], carddeck[randomIndex]] = [carddeck[randomIndex], carddeck[currentIndex]];
    //return current index value which will be random index value
    return carddeck[currentIndex];
  }

  //Choose a random number in array length
  const getRandomArbitrary = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="App">
      <button onClick={() => createRandomDeck()}>Shuffle</button>
      <CardWrapper cards={randomcards} />
    </div>
  )
}

export default App
