import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTimeStartAction} from "../store/actions/gameTimer";
import {useEffect} from "react";
import {useState} from "react";
import {createGameCards} from "../gameGenerator";
import {ADD_RESULT_LIST_ITEM, addResultListAction} from "../store/actions/resultList";

export const MainGamePage = (props) => {
    const user = useSelector(({user}) => user);
    const startTime = useSelector(({gameTimer}) => gameTimer.timeStart);
    const cardDesign = useSelector(({gameSettings}) => gameSettings.cardDesign);
    const complexity = useSelector(({gameSettings}) => gameSettings.complexity);
    const [time, setTime] = useState(Date.now());
    const [cards, setCards] = useState(createGameCards(complexity));
    const [openedCards, setOpenedCards] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setTimeStartAction(Date.now()));
        const intervalID = setInterval(() => {
            setTime(Date.now())
        }, 500);
        return () => {
            clearInterval(intervalID);
        }
    }, []);
    useEffect(()=>{
        if(cards.length === 0){
            dispatch(addResultListAction({user, time: Math.ceil((time - startTime) / 1000)}));
            props.history.push('/congratulations');
        }
    },[cards])

    const onCardClick = card => () => {
        if(openedCards.length === 1){
          const [selectedCard] = openedCards;
          if(selectedCard.color === card.color){
              setOpenedCards((prevState) => [...new Set([...prevState, card])]);
              setTimeout(()=>{
                  setCards(cards.filter((value)=> value.color!==card.color));
                  setOpenedCards([]);
              }, 300)
          } else {
              setOpenedCards((prevState) => [...new Set([...prevState, card])]);
          }
        }
        else if (openedCards.length >= 2) {
            setOpenedCards([card])
        } else {
            setOpenedCards((prevState) => [...new Set([...prevState, card])]);
        }
    }
    return (<div>
        <div className="main_page__user_data">
            <div> Player: {user.firstName} {user.lastName} ({user.email})</div>
            <div>Time: {Math.ceil((time - startTime) / 1000)}</div>
        </div>
        <div className="cardsContainer">
        {cards.map((card) => (
            <div key={card.id} className="flip" onClick={onCardClick(card)}>
                <div className={`card ${openedCards.includes(card) ? "flipped" : ""}`}>
                    <div className={`face front front-${cardDesign}`}/>
                    <div className="face back" style={{'color': card.color}}>{card.color}</div>
                </div>
            </div>
        ))}
        </div>

    </div>);
}
