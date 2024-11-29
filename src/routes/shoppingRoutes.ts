import { Router } from "express";
import ShoppingController from "../controller/ShoppingController";

const router = Router();


router.post('/shopping', ShoppingController.create);

// Rota para listar todas as despesas
router.get('/shopping', ShoppingController.find);

// Rota para atualizar uma despesa existente
router.put('/shopping/:id', ShoppingController.update);

// Rota para remover uma despesa pelo ID
router.delete('/shopping/:id', ShoppingController.delete);

export default router;