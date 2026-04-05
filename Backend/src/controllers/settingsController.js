const prisma = require('../config/db');

const getSettings = async (req, res) => {
  try {
    const settings = await prisma.siteSetting.findUnique({
      where: { id: 'singleton' },
    });
    
    if (!settings) {
      return res.status(200).json({
        aboutText: "Welcome to Signature Threads. We provide premium tailoring.",
        serviceNote: "Bespoke tailoring and ready-to-wear.",
        contactEmail: "admin@example.com",
        contactPhone: "+234 800 000 0000"
      });
    }
    
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch settings" });
  }
};

const updateSettings = async (req, res) => {
  const { aboutText, serviceNote, contactEmail, contactPhone } = req.body;

  try {
    const updated = await prisma.siteSetting.upsert({
      where: { id: 'singleton' },
      update: { aboutText, serviceNote, contactEmail, contactPhone },
      create: { 
        id: 'singleton', 
        aboutText, 
        serviceNote, 
        contactEmail,
        contactPhone
      },
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update settings" });
  }
};

module.exports = { getSettings, updateSettings };