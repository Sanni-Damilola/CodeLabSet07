const express = require("express");
const userModel = require("../Model/UserModel");

//get all users
const getAllUsers = async (req, res) => {
  try {
    const getUsers = await userModel.find();
    res.status(200).json({
      message: "gotten all users",
      data: getUsers,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't get all users",
    });
  }
};

// create a new user
const newUser = async (req, res) => {
  try {
    const { name, email, password, isFemale, phoneNum } = req.body;

    const createUser = await userModel.create({
      name,
      email,
      password,
      isFemale,
      phoneNum,
    });

    res.status(201).json({
      message: "created a new user",
      data: createUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't create  user",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, password, isFemale, phoneNum } = req.body;

    const updatingUser = await userModel.findByIdAndUpdate(
      req.params.userId,
      {
        name,
        email,
        password,
        isFemale,
        phoneNum,
      },
      { new: true }
    );
    res.status(201).json({
      message: "user updated successfully",
      data: updatingUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Couldn't update user",
      error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const getingId = req.params.userId;

    const deleteUser = await userModel.findByIdAndDelete(getingId);
    res.status(201).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "unable to delete user",
      error,
    });
  }
};

module.exports = { getAllUsers, newUser, deleteUser, updateUser };
