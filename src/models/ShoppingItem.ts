import mongoose, { Schema } from 'mongoose';

// Crie o schema com base na interface
const shoppingSchema = new Schema({
  descricao: {
    type: String,
    required: [true, 'A descrição é obrigatória.']
  },
  valor: {
    type: Number,
    required: [true, 'O valor é obrigatório.']
  }
});

const Despesa = mongoose.model('shoppingitens', shoppingSchema);

export { Despesa };
