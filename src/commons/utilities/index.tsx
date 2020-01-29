function createUniqueId(): string {
    return btoa(Math.random() * (new Date().getTime()) + '')
}

export {createUniqueId};
