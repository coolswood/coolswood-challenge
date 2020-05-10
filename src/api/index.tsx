import server from "server/index";

let random = Math.floor(Math.random() * Math.floor(1)) * 1000 + 1000;


export const mockFetch = (url: string) => {
    return new Promise<any>((resolve) => {
        setTimeout(() => {
            resolve(server.get(url))
        }, random)
    })
}