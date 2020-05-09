import React, {PureComponent} from 'react';
import {Page, Card, Loader} from 'UI';

import {getListData} from './LiatAction'

import { connect } from 'react-redux';

class List extends PureComponent {

    componentDidMount() {
        this.props.dispatch(getListData())
    }

    render() {
        const {vendingListLoading, vendingList} = this.props;

        if(vendingListLoading) {
            return (
                <Page>
                    <Loader />
                </Page>
            )
        }

        return (
            <Page>
                {
                    vendingList.map(i => (
                        <Card
                            key={i.id}
                            id={i.id}
                            name={i.name}
                            text={i.text}
                            img={i.img}
                        />
                    ))
                }
            </Page>
        )
    }
}

const mapStateToProps = (state) => {
    const {listReducer} = state;

    return listReducer
}

export default connect(mapStateToProps)(List);
