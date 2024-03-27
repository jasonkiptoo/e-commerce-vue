const categories = [
    { "name": "electronics", id: 2 },
    { "name": "mens", id: 3 },
    { "name": "womens", id: 4 },
];

export default async function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(categories));
}
