export const storeToken = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

export const  getToken = (key: string) => {
    return localStorage.getItem(key) || ''
}


export const clearStore = (key: string) => {
    localStorage.removeItem(key);
}