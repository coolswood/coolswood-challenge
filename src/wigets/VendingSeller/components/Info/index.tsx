import React, {FC} from "react";

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

const renderStatus = (label: string, status: null|boolean) => {
    if(status === null) {
        return 'Купите шоколадку!'
    }

    if(status) {
        return 'Вы выбрали товар номер ' + label
    }

    return 'Нет такого товара!'
}

const Info:FC<{label: string, status: null|boolean}> = ({label, status}) => {
    return (
        <div style={styles.wrapper}>
            <div>{renderStatus(label, status)}</div>
            <div>Внесено денег: 100</div>
            <div>Введен номер: {label}</div>
        </div>
    )
}

export default Info;