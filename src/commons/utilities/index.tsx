function createUniqueId(): string {
    return btoa(Math.random() * (new Date().getTime()) + '')
}

function getDataSting(date: number | string) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const INVALID_DATE_FLAG = "Invalid Date";
    const dateToParse = new Date(date);

    if(dateToParse.toString() === INVALID_DATE_FLAG) return "";

    return `${days[dateToParse.getDay()]}, ${dateToParse.getDate()} of ${months[dateToParse.getMonth()]}`
}

export {createUniqueId, getDataSting};
