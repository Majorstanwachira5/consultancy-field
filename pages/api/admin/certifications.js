import { withAuth } from '../../../lib/middleware';
import prisma from '../../../lib/prisma';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, issuingBody, dateIssued, expiryDate, imageUrl } = req.body;

    // Basic validation
    if (!name || !issuingBody || !dateIssued) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const newCertification = await prisma.certification.create({
        data: {
          name,
          issuingBody,
          dateIssued: new Date(dateIssued),
          expiryDate: expiryDate ? new Date(expiryDate) : null,
          imageUrl,
        },
      });
      res.status(201).json(newCertification);
    } catch (error) {
      res.status(500).json({ error: 'Error creating certification' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default withAuth(handler, { roles: ['admin'] });
