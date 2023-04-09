import Card from "../card/Card";
import { ICard } from "../../interfaces/interface";
import styles from './cardwrapper.module.scss';
interface ICardsProps {
    cards: ICard[];
}

const CardsWrapper = ({ cards }: ICardsProps) => {
    return (
        <div className={styles.card_wrapper}>
            {cards.map((card, index) => {
                return <Card key={index} index={index} cardData={card} />;
            })}
        </div>
    );
};

export default CardsWrapper;