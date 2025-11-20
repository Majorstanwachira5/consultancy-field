import fs from 'fs';
import path from 'path';
import { withAuth } from '../../../lib/middleware';

const handler = (req, res) => {
  if (req.method === 'GET') {
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    try {
      const filenames = fs.readdirSync(uploadsDir);
      const files = filenames.map(name => {
        const stats = fs.statSync(path.join(uploadsDir, name));
        return {
          name,
          size: stats.size,
        };
      });
      res.status(200).json(files);
    } catch (error) {
      res.status(500).json({ error: 'Unable to read files' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default withAuth(handler, { roles: ['admin'] });
