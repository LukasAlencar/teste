// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json()

  const data = {
    name: 'Renan Tinti',
    age: 'novinho rs s2 -18',
    array: [1, 2, 3, 4, 5],
    map: [{id: 1, nome: 'Kleyton'}]
  }
}
