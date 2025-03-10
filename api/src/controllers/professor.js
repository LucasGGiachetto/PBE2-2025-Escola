const {PrismaClient} = require('@prisma/client');
const prisma = new  PrismaClient ();

const create = async (req, res) => {
    try {
        const professor = await prisma.professor.create({
            data: req.body
        });
        return res.status(201).json(professor);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const professor = await prisma.professor.findMany();
    return res.json(professor);
}

const readOne = async (req, res) => {
    try {
        const professores = await prisma.professor.findOne({
            select: {
                id: true,
                nome: true,
                especialidade: true 
            },
            where: {
                ra: req.params.ra
            }
        });
        return res.json(professores);
    } catch (error) {
        return res.status(404).json ({ error: error.message})
    }
}

const remove = async (req, res) => {
    try {
        const professor = await prisma.professor.delete({
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
        const professor = await prisma.professor.update({
            where: {
                ra: req.params.ra
            },
            data: req.body 
        });
        return res.status(200).json(professor); 
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