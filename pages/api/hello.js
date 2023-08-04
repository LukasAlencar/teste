// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = {
  name: 'Renan Tinti',
  age: 'novinho rs s2 -18',
  array: [1, 2, 3, 4, 5],
  map: [{id: 1, nome: 'Kleyton'}]
}

export default function handler(req, res) {
  res.json(data)
}
