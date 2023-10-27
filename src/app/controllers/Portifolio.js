import {Router} from 'express'
import Project from '@/app/schemas/Project';

const router = new Router();

router.get('/', (req, res) => {});

router.post('/', (req, res) => {
    const {title, slug, description, category} = req.body;
    Project.create({title, slug, description, category})
        .then(project => {
            res.status(200).send(project);
        })
        .catch(error => {
            console.error('Erro ao salvar projeto no banco de dados', error);
            res
            .status(400)
            .send({error:
                'Não foi possível salvar seus dados, tente novamente',
            });
        });
});

router.put('/', (req, res) => {});

router.delete('/', (req, res) => {});

export default router;