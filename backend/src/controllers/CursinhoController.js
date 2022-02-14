const connection = require('../database/connection');
module.exports = {
    async index(request, response){
        const cursinhos = await connection('cursinhos').select('*');
        return response.json(cursinhos);
    },
    async show(request, response){
        const {name} = request.params;
        const cursinhos = await connection('cursinhos')
        .where('name',name)
        .select('*')
        .first()
        return response.json(cursinhos);
    },
    async rankingg(request, response){
        const cursinhos = await connection('cursinhos').select('*');
        cursinhos.sort(function (a,b){
            if(a.mediag > b.mediag){
                return -1;
            }else{
                return true;
            }
        })
        return response.json(cursinhos);
    },
    async rankingm(request, response){
        const cursinhos = await connection('cursinhos').select('*');
        cursinhos.sort(function (a,b){
            if(a.mediam > b.mediam){
                return -1;
            }else{
                return true;
            }
        })
        return response.json(cursinhos);
    },
    async rankingr(request, response){
        const cursinhos = await connection('cursinhos').select('*');
        cursinhos.sort(function (a,b){
            if(a.mediar > b.mediar){
                return -1;
            }else{
                return true;
            }
        })
        return response.json(cursinhos);
    },
    async rankingl(request, response){
        const cursinhos = await connection('cursinhos').select('*');
        cursinhos.sort(function (a,b){
            if(a.medial > b.medial){
                return -1;
            }else{
                return true;
            }
        })
        return response.json(cursinhos);
    },
    async rankingch(request, response){
        const cursinhos = await connection('cursinhos').select('*');
        cursinhos.sort(function (a,b){
            if(a.mediach > b.mediach){
                return -1;
            }else{
                return true;
            }
        })
        return response.json(cursinhos);
    },
    async rankingcn(request, response){
        const cursinhos = await connection('cursinhos').select('*');
        cursinhos.sort(function (a,b){
            if(a.mediacn > b.mediacn){
                return -1;
            }else{
                return true;
            }
        })
        return response.json(cursinhos);
    },
    async create(request, response){
        const {name, email, whatsapp, city, uf, senha, preco, mediaa} = request.body;
    await connection('cursinhos').insert({
        name, 
        email, 
        whatsapp, 
        city, 
        uf, 
        senha,
        preco,
        mediaa,
    })
    return  response.json({ name ,senha });
    },
    async delete(request,response){
        const cursinho_id = request.headers.authorization;
        const cursinhos = await connection('cursinhos').where('name', cursinho_id).first();
        if (cursinhos.name != cursinho_id){
            return response.status(401).json({ error: 'Operation not permitted'});
        }
        await connection('cursinhos').where('name', cursinho_id).delete();

        return response.status(204).send();
    },
    async compara(request,response){
        const {cursinho1, cursinho2 }= request.body;

        const cursinhoa = await connection('cursinhos').where('name', cursinho1).first();
        const cursinhob = await connection('cursinhos').where('name', cursinho2).first();
    
        let  custoba = 0;
        let  custobb = 0;
        custoba = ((cursinhoa.mediag-500)/(cursinhoa.preco/2));
        custobb = ((cursinhob.mediag-500)/(cursinhob.preco/2));

        return  response.json({ cursinhoa ,cursinhob, custoba, custobb });
    },

}