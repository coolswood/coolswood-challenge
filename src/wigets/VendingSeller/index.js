import React, {Component} from "react";
import isEqual from 'lodash/isEqual'

import Catalog from './components/Catalog';
import Info from './components/Info';
import Typer from './components/Typer';

const getAllId = (products) => {
    let set = new Set();

    products.forEach(i => {
        set.add(i.id)
    })

    return set
}

export default class VendingSeller extends Component {
    constructor(props) {
        super();

        this.setId = getAllId(props.products)
        this.state = {
            number: '',
            isCorrectNmb: null
        }
    }

    componentDidUpdate(prevProps) {
        if(!isEqual(prevProps.products, this.props.products)) {
            this.onReset()
        }
    }

    onClickNumber = (nmb) => {
        const {number} = this.state;

        if(number.length === 4) return;

        this.setState({
            number: number + nmb
        }, () => {
            const {number} = this.state;

            if(number.length === 4) {
                this.setState({
                    isCorrectNmb: this.setId.has(+number)
                })
            }
        })
    }

    onClickBuy = () => {
        this.props.onBuyProduct(this.state.number)
    }

    onReset = () => {
        this.setState({
            number: '',
            isCorrectNmb: null
        })
    }

    render() {
        const {number, isCorrectNmb} = this.state;
        const {products} = this.props;

        return (
            <div style={{display: 'flex'}}>
                <Catalog
                    number={number}
                    products={products}
                />
                <div style={{width: '100%'}}>
                    <Info
                        number={number}
                        status={isCorrectNmb}
                    />
                    <Typer
                        onClickNumber={this.onClickNumber}
                        onClickBuy={this.onClickBuy}
                        isCorrectNmb={isCorrectNmb}
                        onReset={this.onReset}
                    />
                </div>
            </div>
        )
    }
}