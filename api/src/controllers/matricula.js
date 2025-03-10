const {PrismaClient} = require('@prisma/client');
const prisma = new  PrismaClient ();

const create = async (req, res) => {
    try {
        const matricula = await prisma.matricula.create({
            data: req.body
        });
        return res.status(201).json(matricula);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const matricula = await prisma.matricula.findMany();
    return res.json(matricula);
}

const readOne = async (req, res) => {
    try {
        const matriculas = await prisma.matricula.findOne({
            select: {
                id: true,
                aluno: true,
                disciplina: true,
                data: true
            },
            where: {
                ra: req.params.ra
            }
        });
        return res.json(matriculas);
    } catch (error) {
        return res.status(404).json ({ error: error.message})
    }
}

const remove = async (req, res) => {
    try {
        const matricula = await prisma.matricula.delete({
            where: {
                ra: req.params.ra
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const matricula = await prisma.matricula.update({
            where: {
                ra: req.params.ra
            },
            data: req.body 
        });
        return res.status(200).json(matricula); 
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