import React from "react";
import {render, fireEvent} from '@testing-library/react';
import Typer from "../index";

describe('Typer', () => {
    it('isCorrectNmb: null', () => {
        const {container} = render (
            <Typer
                onClickNumber={() => {}}
                onClickBuy={() => {}}
                isCorrectNmb={null}
                onReset={() => {}}
            />
        )

        expect(container).toMatchSnapshot()
    })

    it('isCorrectNmb: true', () => {
        const onClickNumber = jest.fn();
        const onClickBuy = jest.fn();
        const onReset = jest.fn();

        const {container, getByText} = render (
            <Typer
                onClickNumber={onClickNumber}
                onClickBuy={onClickBuy}
                isCorrectNmb={true}
                onReset={onReset}
            />
        )

        expect(container).toMatchSnapshot()

        fireEvent.click(getByText(/1/));

        expect(onClickNumber.mock.calls.length).toBe(1);

        fireEvent.click(getByText(/Купить/));

        expect(onClickBuy.mock.calls.length).toBe(1);

        fireEvent.click(getByText(/Очистить/));

        expect(onReset.mock.calls.length).toBe(1);

    })

    it('isCorrectNmb: false', () => {
        const {container} = render (
            <Typer
                onClickNumber={() => {}}
                onClickBuy={() => {}}
                isCorrectNmb={true}
                onReset={() => {}}
            />
        )

        expect(container).toMatchSnapshot()
    })
})