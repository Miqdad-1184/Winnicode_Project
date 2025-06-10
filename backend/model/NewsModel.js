import { Sequelize, DataTypes } from "sequelize";
import database from "../config/Database.js";

const News = database.define("news", {
  id_berita: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_kategori: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  judul_berita: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gambar_berita: {
    type: DataTypes.MEDIUMBLOB,
    allowNull: true,
  },
  isi_berita: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tanggal_berita: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
}, {
  freezeTableName: true,
});

export default News;

(async () => {
  try {
    await database.sync();
    console.log("News table synced");
  } catch (err) {
    console.error("Error syncing News table:", err);
  }
})();
