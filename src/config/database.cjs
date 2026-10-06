// configurações do sequelize

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  define: {
    timestamps: true, //rastrear a data de inserção(criacao, atualização) do dado no db
    underscored: true,
    underscoredAll: true,
  },
};
