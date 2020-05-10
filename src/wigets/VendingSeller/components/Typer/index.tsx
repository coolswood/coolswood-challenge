import React, {FC, MouseEvent} from "react";
import CSS from 'csstype';

const wrapper: CSS.Properties = {
    display: 'flex',
    flexWrap: "wrap",
    width: "370px",
    justifyContent: 'flex-end'
}

const styles = {
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

type TTyper = {
    onClickNumber: (text: number) => void,
    onClickBuy: () => void,
    onReset: () => void,
    isCorrectNmb: null | boolean
}

const Typer: FC<TTyper> = ({onClickNumber, onClickBuy, isCorrectNmb, onReset}) => {

    const clickNumber = (e: MouseEvent<HTMLElement>) => {
        onClickNumber(+e.currentTarget.innerText)
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
            <div style={wrapper}>
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

export default Typer;