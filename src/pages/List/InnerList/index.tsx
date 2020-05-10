import React, {PureComponent} from 'react';
import {Page, Loader} from 'UI';
import {VendingSeller} from 'wigets';

import {getInnerListData} from './InnerListAction'

import { connect } from 'react-redux';

import {TInnerListProps} from './type'
import {TAppState} from 'store/rootReducer'
import {TInitialState} from "./InnerListReducer";

class InnerList extends PureComponent<TInnerListProps> {

    componentDidMount() {
        this.props.dispatch(getInnerListData('chocolate'))
    }

    render() {
        const {productsLoading, products = []} = this.props;

        if(productsLoading) {
            return (
                <Page>
                    <Loader />
                </Page>
            )
        }

        return (
            <Page>
                <VendingSeller
                    products={products}
                    onBuyProduct={console.log} // делаем отправку данных на сервер и обновляем products в redux
                />
            </Page>
        )
    }
}

const mapStateToProps = (state: TAppState): TInitialState => {
    const {innerListReducer} = state;

    return innerListReducer
}

export default connect(mapStateToProps)(InnerList);
