export const formatterDate = (date: string) => {
    const formatDate = new Date(date)
    const day = formatDate.getDate();
    const month = formatDate.getMonth();
    const year = formatDate.getFullYear();
    console.log(`${day}/${month}/${year}`)
    return `${day}/${month}/${year}`
}   