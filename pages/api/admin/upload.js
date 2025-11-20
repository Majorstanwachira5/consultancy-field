import { withAuth } from '../../../lib/middleware';
import multer from 'multer';
import path from 'path';
import prisma from '../../../lib/prisma';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  }),
});

const handler = async (req, res) => {
  if (req.method === 'POST') {
    upload.single('file')(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!req.file) {
        return res.status(400).json({ error: 'Please select a file to upload' });
      }

      const { projectId } = req.body;
      const { filename, path: filePath, size, mimetype } = req.file;

      try {
        const media = await prisma.media.create({
          data: {
            name: filename,
            path: `/uploads/${filename}`,
            size: size,
            type: mimetype,
          },
        });

        if (projectId) {
          await prisma.projectMedia.create({
            data: {
              projectId,
              mediaId: media.id,
            },
          });
        }

        res.status(200).json({ filePath: `/uploads/${filename}` });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default withAuth(handler, { roles: ['admin'] });

export const config = {
  api: {
    bodyParser: false,
  },
};
