import {Request, Response, Router} from "express";
import multer from "multer";
import Node from "../model/Node";
import path from "path";

const router = Router();

// Ajouter une image au dossier uploads avec multer files/uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ error: "Aucun fichier n'a été téléchargé" });
    }

    const { filename, path, size } = req.file;
    const boxId = 1;
    const extensionId = 1;

    try {
        const newNode = await Node.create({
            name: filename,
            box_id: boxId,
            extension_id: extensionId,
            size,
            path
        })

        res.status(200).json({
            message: "Image uploadée avec succès !",
            file: newNode
        });

    } catch (error) {
        console.error("Erreur lors de l'upload de l'image :", error);
        res.status(500).json({ error: "Erreur lors de l'upload de l'image" });
    }
})

router.get('/', async (req: Request, res: Response) => {
    try {
        const files = await Node.findAll();
        res.status(200).json(files);
    } catch (error) {
        console.error("Erreur lors de la récupération des fichiers :", error);
        res.status(500).json({ error: "Erreur lors de la récupération des fichiers" });
    }
});

export default router;
