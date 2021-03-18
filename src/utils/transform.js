export function transformData(data) {
    let result = Object.keys(data).map(key => {
        return {
            ...data[key],
            id: key
        }
    })
    return data ? result : []
}