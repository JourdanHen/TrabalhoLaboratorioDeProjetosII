const express = require('express');
const CursinhoController = require('./controllers/CursinhoController');
const AlunoController = require('./controllers/AlunoController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/cursinhos', CursinhoController.index);
routes.get('/cursinhos/show/:name', CursinhoController.show);
routes.get('/cursinhos/rankingg', CursinhoController.rankingg);
routes.get('/cursinhos/rankingm', CursinhoController.rankingm);
routes.get('/cursinhos/rankingr', CursinhoController.rankingr);
routes.get('/cursinhos/rankingl', CursinhoController.rankingl);
routes.get('/cursinhos/rankingch', CursinhoController.rankingch);
routes.get('/cursinhos/rankingcn', CursinhoController.rankingcn);
routes.post('/cursinhos', CursinhoController.create);
routes.delete('/cursinhos/delete', CursinhoController.delete);
routes.post('/cursinhos/compara', CursinhoController.compara);

routes.post('/alunos', AlunoController.create);
routes.get('/alunos', AlunoController.index);
routes.delete('/alunos/:id', AlunoController.delete);

routes.get('/profile', ProfileController.index);
routes.get('/profile/media', ProfileController.media);



module.exports = routes;