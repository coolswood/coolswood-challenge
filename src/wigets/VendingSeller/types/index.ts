export type TProduct = {
    id: number,
    name: string,
    price: number,
    count: number,
    img: string
}

export type TVendingSellerState = {
    label: string,
    isCorrectNmb: null | boolean
}

export type TVendingSellerProps = {
    products: Array<TProduct>,
    onBuyProduct: (label: string) => void
}