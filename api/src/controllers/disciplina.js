const {PrismaClient} = require('@prisma/client');
const prisma = new  PrismaClient ();

const create = async (req, res) => {
    try {
        const disciplina = await prisma.disciplina.create({
            data: req.body
        });
        return res.status(201).json(disciplina);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const disciplina = await prisma.disciplina.findMany();
    return res.json(disciplina);
}

const readOne = async (req, res) => {
    try {
        const disciplinas = await prisma.disciplina.findOne({
            select: {
                id: true,
                nome: true,
                turma: true,
                professor: true
            },
            where: {
                id: req.params.ra
            }
        });
        return res.json(alunos);
    } catch (error) {
        return res.status(404).json ({ error: error.message})
    }
}

const remove = async (req, res) => {
    try {
        const disciplina = await prisma.disciplina.delete({
            where: {
                id: req.params.ra
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const disciplina = await prisma.disciplina.update({
            where: {
                id: req.params.ra
            },
            data: req.body 
        });
        return res.status(200).json(aluno); 
    } catch (error) {
        return res.status(404).json({ error: error.message }); 
    }
};

module.exports = {
    create,
    read,
    readOne,
    remove,
    update
};