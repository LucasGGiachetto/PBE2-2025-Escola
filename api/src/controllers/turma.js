const {PrismaClient} = require('@prisma/client');
const prisma = new  PrismaClient ();

const create = async (req, res) => {
    try {
        const turma = await prisma.turma.create({
            data: req.body
        });
        return res.status(201).json(turma);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const turma = await prisma.turma.findMany();
    return res.json(turma);
}

const readOne = async (req, res) => {
    try {
        const turmas = await prisma.turma.findOne({
            select: {
                id: true,
                nome: true,
                ano: true 
            },
            where: {
                ra: req.params.ra
            }
        });
        return res.json(turmas);
    } catch (error) {
        return res.status(404).json ({ error: error.message})
    }
}

const remove = async (req, res) => {
    try {
        const turma = await prisma.turma.delete({
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
        const turma = await prisma.turma.update({
            where: {
                ra: req.params.ra
            },
            data: req.body
        });
        return res.status(202).json(turma);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {
    create,
    read,
    readOne,
    remove,
    update
};