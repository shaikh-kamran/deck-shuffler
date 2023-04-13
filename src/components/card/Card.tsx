import { ICard } from "../../interfaces/interface";
import styles from './card.module.scss';
interface ICardProps {
    cardData: ICard;
    index: Number
}

const Card = ({ cardData, index }: ICardProps) => {

    return (
        <div className={styles.card_container}
            style={{ zIndex: index && Number(index) ? Number(index) : 0 }}>
            {
                cardData && cardData.name ?
                    <div className={styles.content_inner}>
                        <div className={styles.top_section} style={{ color: cardData ? cardData.color : 'transparent' }}>
                            {/* Show the Top number and symbol part of the Card */}
                            <div className={styles.top_symbol}>
                                <p>{cardData.number}</p>
                                <span className={styles.top_symbol_sigle}>{cardData.symbol}</span>
                            </div>
                            <div />
                        </div>
                        <div className={styles.center_section} style={{ color: cardData ? cardData.color : 'transparent' }}>
                            {/* Show the Center part of the Card */}
                            {/* It shows no of symbols as per number on the card */}
                            {
                                Number(cardData.number) ?
                                    <div className={styles[`grid_${cardData.number}`]}>
                                        {[...Array(Number(cardData.number))].map((_symb, index) => {
                                            index += 1;
                                            return (
                                                <span className={styles.centerCard} key={index}>
                                                    <span className={styles.center_symbol_sigle}>
                                                        {cardData.symbol}
                                                    </span>
                                                </span>
                                            );
                                        })}
                                    </div>
                                    :
                                    <div className={styles.special_card}>{cardData.number}</div>

                            }
                        </div>
                        <div className={styles.bottom_section} style={{ color: cardData ? cardData.color : 'transparent' }}>
                            <div />
                            {/* Show the Bottom number and symbol part of the Card */}
                            <div className={styles.bottom_symbol}>
                                <span className={styles.bottom_symbol_sigle}>{cardData.symbol}</span>
                                <p>{cardData.number}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={styles.content_back}></div>
            }
        </div>
    );
};

export default Card;