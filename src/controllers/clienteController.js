import Cliente from '../models/Cliente.js';

class ClienteController {

    static async create(req, res) {
        try {
            const request = req.body

            const cliente = await Cliente.create(request)
            res.status(201).json(cliente)

        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar cliente', error: error.message });
        }
    }


}

export default ClienteController;