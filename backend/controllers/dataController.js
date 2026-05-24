const fetchUsers = require("../services/fetchUsers");
const fetchPosts = require("../services/fetchPosts");
const integrateData = require("../services/integrateData");
const UserData = require("../models/User");

const buildIntegratedData = async () => {
  const users = await fetchUsers();
  const posts = await fetchPosts();

  return integrateData(users, posts);
};

const saveIntegratedData = async (req, res) => {
  try {
    const integrated = await buildIntegratedData();

    await UserData.deleteMany();
    await UserData.insertMany(integrated);

    res.json({
      message: "Data saved successfully",
      count: integrated.length
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getIntegratedData = async (req, res) => {
  try {
    let data = await UserData.find().sort({ userId: 1 });

    if (data.length === 0) {
      data = await buildIntegratedData();
    }

    res.json({
      count: data.length,
      data
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { saveIntegratedData, getIntegratedData };