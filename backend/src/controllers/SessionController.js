const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { name } = request.body;
        const { senha } = request.body;

        const cursinho = await connection('cursinhos')
            .where('name', name)
            .where('senha', senha)
            .first();
        if (!cursinho){
            return response.status(400).json({ error: 'No cursinho found whit this ID'})
        }
        
        return response.json(cursinho.name);
    }
}