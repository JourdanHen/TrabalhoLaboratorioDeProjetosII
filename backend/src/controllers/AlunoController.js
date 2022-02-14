const connection = require('../database/connection');
module.exports = {
    async index (request, response) {
        const cursinho_id = request.headers.authorization;
        const alunos = await connection('alunos').where('cursinho_id', cursinho_id).select('*')

        return response.json(alunos);
    },

    async create(request,response){
        const { identificacao, ano, notag, notam, notar, notal, notach, notacn } = request.body;
        const cursinho_id = request.headers.authorization;
        const [id] = await connection('alunos').insert({
            identificacao,
            ano,
            notag,
            notam,
            notar,
            notal,
            notach,
            notacn,
            cursinho_id,
        });
        return response.json({ id });
    },
    async delete(request,response){
        const {id} = request.params;
        const cursinho_id = request.headers.authorization;
        const alunos = await connection('alunos')
            .where('id',id)
            .select('cursinho_id')
            .first();
        if (alunos.cursinho_id != cursinho_id){
            return response.status(401).json({ error: 'Operation not permitted'});
        }
        await connection('alunos').where('id', id).delete();

        return response.status(204).send();
    }
};