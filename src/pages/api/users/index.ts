import {NextApiRequest, NextApiResponse} from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'Diego'},
    {id: 2, name: 'Giovanni'},
  ]

  return response.json(users)
}