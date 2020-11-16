const cards = [6, 3, 2, 10, 10, 10, -10, -10, 7, 3]
const queries = [10, 9, -5, 2, 3, 4, 5, -10]
console.log(queries.map(query => cards.filter(card => card === query).length))