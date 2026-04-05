const prisma = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { email, name, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newStaff = await prisma.staff.create({
      data: { name, email, password: hashedPassword, role }
    });

    res.status(201).json({ message: "Staff registered!",
      staffId: newStaff.id
     });
     console.log("New staff registered:", newStaff);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({ 
        error: "An account with this email already exists." 
      });
    }
    console.error("Registration Error:", error);
    res.status(500).json({ 
      error: "Something went wrong during registration." 
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const staff = await prisma.staff.findUnique({ where: { email } });

  if (!staff || !(await bcrypt.compare(password, staff.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: staff.id, role: staff.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

  res.json({ token, role: staff.role });
};
module.exports = { register, login };