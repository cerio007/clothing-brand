const prisama = require("../prismaClient");

const getStaff = async (req, res) => {
    try {
        const staff = await prisama.staff.findMany();
        res.json(staff);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch staff" });
    }
};

const createStaff = async (req, res) => {
    const { name, email, role } = req.body;
    try {
        const newStaff = await prisama.staff.create({
            data: { name, email, role }
        });
        res.status(201).json(newStaff);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create staff" });
    }
};

module.exports = { getStaff, createStaff };