import News from "../models/NewsModel.js";
import { Op } from "sequelize";
import multer from "multer";


export const getAllNews = async (req, res) => {
  try {
    const news = await News.findAll();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getNewsById = async (req, res) => {
  try {
    const news = await News.findOne({ where: { id_berita: req.params.id } });
    if (!news) return res.status(404).json({ message: "News not found" });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createNews = async (req, res) => {
  const { id_kategori, judul_berita, isi_berita } = req.body;
  const gambar_berita = req.file ? req.file.buffer : null;

  try {
    await News.create({
      id_kategori,
      judul_berita,
      isi_berita,
      gambar_berita
    });
    res.status(201).json({ message: "News created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateNews = async (req, res) => {
  try {
    const news = await News.findOne({ where: { id_berita: req.params.id } });
    if (!news) return res.status(404).json({ message: "News not found" });

    const { id_kategori, judul_berita, isi_berita } = req.body;
    const gambar_berita = req.file ? req.file.buffer : news.gambar_berita;

    await news.update({
      id_kategori,
      judul_berita,
      isi_berita,
      gambar_berita
    });

    res.status(200).json({ message: "News updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteNews = async (req, res) => {
  try {
    const news = await News.findOne({ where: { id_berita: req.params.id } });
    if (!news) return res.status(404).json({ message: "News not found" });
    await news.destroy();
    res.status(200).json({ message: "News deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
