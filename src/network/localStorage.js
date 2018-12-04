// catch
export function setLocalStorage(key, value) {
    return localStorage.setItem(key, value)
}

// return 
export function getLocalStorage(key) {
    return localStorage.getItem(key)
}

// remove
export function removeLocalStorage (key) {
    return localStorage.removeItem(key)
}