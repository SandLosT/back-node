//abaixo importamos o express.
import express, { json } from 'express';
import mercadoriaController from './app/controllers/mercadoriaController.js';
import UsuarioController from './app/controllers/UsuarioController.js';

//abaixo alocamos o express em app.
const app = express();
app.use(express.json());
     //ROTAS
     // CRUD DE MERCADORIAS

     //End point que busca a lista de mercadorias
     app.get("/mercadorias", mercadoriaController.index)

     //End point de busca por id
     app.get("/mercadorias/:id", mercadoriaController.show)

     //End point de busca por nome
     app.get("/mercadorias/nome/:nome", mercadoriaController.showforname)

     //End point de busca por grupo
     app.get("/mercadorias/grupo/:grupo",mercadoriaController.showforgroup)

     //End point de cadastro
     app.post("/mercadorias", mercadoriaController.store)

     //End point de exclusão e configurado para excluir por nome.
     app.delete("/mercadorias/:nome",mercadoriaController.delete)

     //end point de update
     app.put("/mercadorias/:id", mercadoriaController.update)

    // CRUD de Usuários

    // End point que busca a lista de usuários
    app.get("/usuarios",UsuarioController.index)

    // End point de busca por ID
    app.get("/usuarios/:id", UsuarioController.show)

    // Endpoint de login
    app.post('/login',UsuarioController.showLogin)

    // End point de cadastro de usuário
    app.post("/usuarios", UsuarioController.store)

    // End point de exclusão de usuário por ID
    app.delete("/usuarios/:id",UsuarioController.delete)

    // End point de alteração de dados do usuário
    app.put("/usuarios/:id", UsuarioController.store)

// no metodo acima o "req" significa requisição e o "res" significa resposta.
export default app;