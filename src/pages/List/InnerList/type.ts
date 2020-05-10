export type TProducts = {
    id: number,
    name: string,
    price: number,
    count: number,
    img: string
};

export type TInnerListProps = {
    dispatch: (func: any) => void,
    productsLoading: boolean,
    products: Array<TProducts> | undefined
};