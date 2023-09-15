import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async function (req: FastifyRequest, res: FastifyReply) {
    return { message: 'Hello API' };
  });
}
