import { addUser, findUserById, listAllUsers, findCatsByUserID} from "../models/user-model.js";

const getUser = async (req, res) => {
  res.json(await listAllUsers());
};

const getUserById = async (req, res) => {
  const user = await findUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const addNewUser = async (req, res) => {
  const result = await addUser(req.body);
  if (!result) {
    res.sendStatus(400);
    return;
  }
  res.status(201);
  res.json(result);
};

const putUser = async (req, res) => {
  res.sendStatus(200);
  res.json({ message: "User item updated.", result });
}

const deleteUser = async (req, res) => {
  const result = await removeUser(req.params.id);
  if (!result) {
    res.sendStatus(404);
  } else {
    res.sendStatus(200);
    res.json({ message: "User item deleted.", result });
  }
}

const getCatByUserID = async (req, res) => {
  const cats = await findCatsByUserID(req.params.id);
  if (cats) {
    res.json(cats);
  } else {
    res.sendStatus(404);
  }
};

export { getUser, getUserById, addNewUser, putUser, deleteUser, getCatByUserID};
