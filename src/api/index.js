import server from 'server';

let random = Math.floor(Math.random() * Math.floor(1)) * 1000 + 1000;


export const mockFetch = (url) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(server.get(url))
        }, random)
    })
}