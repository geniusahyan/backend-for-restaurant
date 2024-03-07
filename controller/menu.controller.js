import mongoose from "mongoose";
import menudata from "../model/menu.model.js";

export const getMenu = async (req, res) => {
  try {
    const allMenuData = await menudata.find();
    return res.status(200).json(allMenuData);
  } catch (error) {
    console.error('Error fetching menu data:', error);
    return res.status(500).json({ message: 'Internal server error', error });
  }
};
