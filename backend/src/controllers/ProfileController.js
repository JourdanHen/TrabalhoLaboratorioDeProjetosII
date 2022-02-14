const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const cursinho_id = request.headers.authorization;
        const  alunos = await connection('alunos')
            .where('cursinho_id',cursinho_id)
            .select('*');

        return response.json(alunos);
    },
    async media(request, response){
        let media_cursinhog = 0;
        const cursinho_id = request.headers.authorization;
        const  alunos = await connection('alunos')
            .where('cursinho_id',cursinho_id)
            .select('*');
        let i = 0;
        for(i;i<alunos.length;i++){
            media_cursinhog += alunos[i].notag;
        }
        media_cursinhog = media_cursinhog /(i);
        const mediag = media_cursinhog;
        await connection('cursinhos').where('name', cursinho_id).update({mediag})
        let media_cursinho = 0;
        i = 0;
        for(i;i<alunos.length;i++){
            media_cursinho += alunos[i].notam;
        }
        media_cursinho = media_cursinho /(i);
        const mediam = media_cursinho;
        await connection('cursinhos').where('name', cursinho_id).update({mediam})
        media_cursinho = 0;
        i = 0;
        for(i;i<alunos.length;i++){
            media_cursinho += alunos[i].notar;
        }
        media_cursinho = media_cursinho /(i);
        const mediar = media_cursinho;
        await connection('cursinhos').where('name', cursinho_id).update({mediar})
        media_cursinho = 0;
        i = 0;
        for(i;i<alunos.length;i++){
            media_cursinho += alunos[i].notal;
        }
        media_cursinho = media_cursinho /(i);
        const medial = media_cursinho;
        await connection('cursinhos').where('name', cursinho_id).update({medial})
        media_cursinho = 0;
        i = 0;
        for(i;i<alunos.length;i++){
            media_cursinho += alunos[i].notach;
        }
        media_cursinho = media_cursinho /(i);
        const mediach = media_cursinho;
        await connection('cursinhos').where('name', cursinho_id).update({mediach})
        media_cursinho = 0;
        i = 0;
        for(i;i<alunos.length;i++){
            media_cursinho += alunos[i].notacn;
        }
        media_cursinho = media_cursinho /(i);
        const mediacn = media_cursinho;
        await connection('cursinhos').where('name', cursinho_id).update({mediacn})
        response.json('Médias calculadas');
    },

}