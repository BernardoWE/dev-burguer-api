// configurações do sequelize

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'admin',
  password: '123456',
  database: 'dev-burguer-db',
  define: {
    timestamps: true, //rastrear a data de inserção(criacao, atualização) do dado no db
    underscored: true,
    underscoredAll: true,
  },
};
