import React from "react";

const styles = {
    wrapper: {
        padding: 20,
        border: '1px solid black',
    },
    img: {
        width: 200,
        height: 150
    }
};

const renderStatus = ({number, status}) => {
    if(status === null) {
        return 'Купите шоколадку!'
    }

    if(status) {
        return 'Вы выбрали товар номер ' + number
    }

    return 'Нет такого товара!'
}

export default ({number, status}) => {
    return (
        <div style={styles.wrapper}>
            <div>{renderStatus({number, status})}</div>
            <div>Внесено денег: 100</div>
            <div>Введен номер: {number}</div>
        </div>
    )
}