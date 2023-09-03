const { Case } = require("../models");
// console.log(Case);

module.exports = {
  create,
  index,
  show,
  update,
  delete: destroy,
};

async function create(req, res) {
  // console.log(req.body)
  try {
    res.status(201).json(await Case.create(req.body));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


async function index(req, res) {
  try {
    res.status(200).json(await Case.find());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function show(req, res) {
  try {
    res.status(200).json(await Case.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    res
    .status(200)
    .json(
      await Case.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function destroy(req, res) {
  try {
    res
    .status(200)
    .json(
      await Case.findOneAndDelete({_id: req.params.id})
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}