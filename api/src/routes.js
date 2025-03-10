const express = require('express');
const routes = express.Router();

const Aluno = require('./controllers/aluno.js');
const Professor = require('./controllers/professor.js');
const Turma = require('./controllers/turma.js');
const Matricula = require('./controllers/matricula.js');
const Disciplina = require('./controllers/disciplina.js');

routes.get('/', (req, res) => {
    return res.json({ message: 'Escola Superior PW'});
});

routes.post('/aluno', Aluno.create);
routes.get('/aluno', Aluno.read);
routes.delete('/aluno/:ra', Aluno.remove);
routes.put('/aluno/:ra', Aluno.update);

routes.post('/professor', Professor.create);
routes.get('/professor', Professor.read);
routes.delete('/professor/:id', Professor.remove);
routes.put('/professor/:id', Professor.update);

routes.post('/turma', Turma.create);
routes.get('/turma', Turma.read);
routes.delete('/turma/:id', Turma.remove);
routes.put('/turma/:id', Turma.update);

routes.post('/matricula', Matricula.create);
routes.get('/matricula', Matricula.read);
routes.delete('/matricula/:id', Matricula.remove);
routes.put('/matricula/:id', Matricula.update);

routes.post('/disciplina', Disciplina.create);
routes.get('/disciplina', Disciplina.read);
routes.delete('/disciplina/:id', Disciplina.remove);
routes.put('/disciplina/:id', Disciplina.update);

module.exports = routes;