import React, {FC} from "react";
import { Link } from "react-router-dom";

const styles = {
    card: {
        border: '1px solid black',
        width: 250,
        padding: 20,
        display: 'block'
    },
    img: {
        width: 200
    }
}

type CardProps = {
    name: string,
    text: string,
    img: string,
    id: string,
}

const Card: FC<CardProps> = ({name, text, img, id}) => (
    <Link to={id} style={styles.card}>
        <img style={styles.img} src={img} alt=""/>
        <div>
            <h3>{name}</h3>
            <span>{text}</span>
        </div>
    </Link>
)

export default Card;