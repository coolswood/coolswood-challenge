export type TVendingList = {
    id: string,
    name: string,
    text: string,
    img: string,
    currency: string,
};

export type TListProps = {
    dispatch: (func: any) => void,
    vendingListLoading: boolean,
    vendingList: Array<TVendingList> | undefined
};