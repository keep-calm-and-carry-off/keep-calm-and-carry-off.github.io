export const trunscateString = (value:string, maxSize:number):string => {
    if (value.length <= maxSize) return value
    else return value.substring(0, maxSize - 3) + '...'
}