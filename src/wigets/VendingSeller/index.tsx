import React, {Component} from "react";
import isEqual from 'lodash/isEqual'

import Catalog from './components/Catalog';
import Info from './components/Info';
import Typer from './components/Typer';

import {TProduct, TVendingSellerState, TVendingSellerProps} from './types';

const getAllId = (products: Array<TProduct>) => {
    let set: Set<number> = new Set();

    products.forEach(i => {
        set.add(i.id)
    })

    return set
}

export default class VendingSeller extends Component<TVendingSellerProps, TVendingSellerState> {
    private setId: Set<number>;

    constructor(props: TVendingSellerProps) {
        super(props);

        this.setId = getAllId(props.products)
        this.state = {
            label: '',
            isCorrectNmb: null
        }
    }

    componentDidUpdate(prevProps: TVendingSellerProps) {
        if(!isEqual(prevProps.products, this.props.products)) {
            this.onReset()
        }
    }

    onClickNumber = (nmb: number) => {
        const {label} = this.state;

        if(label.length === 4) return;

        this.setState({
            label: label + nmb
        }, () => {
            const {label} = this.state;

            if(label.length === 4) {
                this.setState({
                    isCorrectNmb: this.setId.has(+label)
                })
            }
        })
    }

    onClickBuy = () => {
        this.props.onBuyProduct(this.state.label)
    }

    onReset = () => {
        this.setState({
            label: '',
            isCorrectNmb: null
        })
    }

    render() {
        const {label, isCorrectNmb} = this.state;
        const {products} = this.props;

        return (
            <div style={{display: 'flex'}}>
                <Catalog
                    label={label}
                    products={products}
                />
                <div style={{width: '100%'}}>
                    <Info
                        label={label}
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