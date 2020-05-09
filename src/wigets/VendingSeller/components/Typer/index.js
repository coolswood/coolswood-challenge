import React from "react";
import {renderNumbers} from "./helper";

const styles = {
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 370,
        justifyContent: 'flex-end'
    },
    button: {
        padding: 30,
        border: '1px solid black',
        width: 60,
        cursor: 'pointer'
    },
    buyBnt: {
        marginTop: 30,
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        cursor: 'pointer'
    }
};

export default ({onClickNumber, onClickBuy, isCorrectNmb, onReset}) => {

    const clickNumber = (e) => {
        onClickNumber(e.target.innerText)
    }

    const renderNumbers = () => {
        let nbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        return nbs.map(i => {
            return (
                <div
                    key={i}
                    onClick={clickNumber}
                    style={styles.button}
                >{i}</div>
            )
        })
    }

    return (
        <>
            <div style={styles.wrapper}>
                {
                    renderNumbers()
                }
                <div
                    onClick={onReset}
                    style={styles.button}
                >Очистить
                </div>
            </div>
            {isCorrectNmb && <div onClick={onClickBuy} style={styles.buyBnt}>Купить</div>}
        </>
    )
}