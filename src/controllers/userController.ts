import { Request, Response } from 'express'

export default function getAll(req: Request, res: Response) {
  return res.status(200).send({ msg: 'Entrou no get! ontem' })
}
