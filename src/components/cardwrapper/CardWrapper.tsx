import { useEffect, useState } from 'react'
import Card from "../card/Card";
import { ICard } from "../../interfaces/interface";
import styles from './cardwrapper.module.scss';
import { symbols, numbers } from "../../data";

const CardsWrapper = () => {

    const [allcards, setAllCards] = useState<ICard[]>([]);
    const [randomcards, setRandomCards] = useState<ICard[]>([]);

    /**
     * Creates an empty random deck Array
     * Create an array in which all cards are placed in sequence
     */
    useEffect(() => {
        //Creating an Empty Card Deck
        const cards = new Array(52).fill({});
        setRandomCards([...cards]);
        //Preparing Normal Card Deck
        numbers.forEach(number => {
            symbols.forEach(symbol => {
                const color = symbol.name === 'diamond' || symbol.name === 'heart' ? 'red' : 'black';
                allcards.push({ ...number, ...symbol, color });
            });
        });
        setAllCards([...allcards]);
    }, []);

    /**
     * Creates an array of Card object in which all elements are choosen randomly from the normal deck
     */
    const createRandomDeck = () => {
        var carddeck = JSON.parse(JSON.stringify(allcards));
        //Filling each place with random card from normal Deck
        const cards = randomcards.map((element, index) => getRandomCard(carddeck, index));;
        setRandomCards([...cards]);
    }

    /**
     * function choose a random card from the deck
     * @param carddeck - Array of card object
     * @param index - Index of card where random card will be placed
     * @returns - an object of Card
     */
    const getRandomCard = (carddeck: ICard[], index: number) => {
        //Starting from last Index
        const currentIndex = carddeck.length - index - 1;
        //get a random number between 0 and current pointer
        const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        //swap the random index value and current index value
        [carddeck[currentIndex], carddeck[randomIndex]] = [carddeck[randomIndex], carddeck[currentIndex]];
        //return current index value which will be random index value
        return carddeck[currentIndex];
    }

    return (
        <div className={styles.card_wrapper}>
            <button onClick={() => createRandomDeck()}>Shuffle</button>
            {randomcards.map((card, index) => {
                return <Card key={index} index={index} cardData={card} />;
            })}
        </div>
    );
};

export default CardsWrapper;