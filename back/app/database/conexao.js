import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Mirela1233@',
    database: 'bd_estoque_market'
});

conexao.connect();
export default conexao;