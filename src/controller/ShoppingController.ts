import { Request, Response } from 'express';
import { Despesa } from '../models/ShoppingItem'; // Certifique-se de que o caminho está correto

class ShoppingController {
  // Criar um novo item de compra
  async create(req: Request, res: Response): Promise<any> {
    try {
      const { descricao, valor } = req.body;

      // Validar campos
      if (!descricao || !valor) {
        return res.status(400).json({ message: "Descrição e valor são obrigatórios." });
      }

      const despesa = new Despesa({ descricao, valor });
      await despesa.save();
      res.status(201).json(despesa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao criar item de compra." });
    }
  }

  // Listar todos os itens de compra
  async find(req: Request, res: Response): Promise<any> {
    try {
      const despesas = await Despesa.find();
      res.json(despesas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao buscar itens de compra." });
    }
  }

  // Atualizar um item de compra
  async update(req: Request, res: Response): Promise<any> {
    try {
      const despesa = await Despesa.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!despesa) {
        return res.status(404).json({ message: "Item de compra não encontrado." });
      }
      res.json(despesa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao atualizar item de compra." });
    }
  }

  // Excluir um item de compra
  async delete(req: Request, res: Response): Promise<any> {
    try {
      const despesa = await Despesa.findByIdAndDelete(req.params.id);
      if (!despesa) {
        return res.status(404).json({ message: "Item de compra não encontrado." });
      }
      res.json({ message: "Item de compra excluído com sucesso." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao excluir item de compra." });
    }
  }
}

export default new ShoppingController();
