import React from "react";

const styles = {
    wrapper: {
        display: 'flex'
    },
    img: {
        width: 200,
        height: 150
    }
};

export default ({products, number}) => {
    return (
        <div style={styles.wrapper}>
            {
                products.map(i => (
                    <div style={+number === i.id ? {border: '1px solid black'} : {}} key={i.id}>
                        <img style={styles.img} src={i.img} alt=""/>
                        <h3>{i.name}</h3>
                        <div>
                            <div>Цена: {i.price}</div>
                            <div>Номер: {i.id}</div>
                            <div>Осталось: {i.count}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}