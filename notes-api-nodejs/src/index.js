import express from "express";
import { validators } from "./validators.js";
import { utils } from "./utils.js";
import { getJSON } from "./getJSON.js";

const validate = new validators();
const util = new utils();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/notes", (req, res) => {
  res.send(getJSON());
});

app.get("/notes/search", (req, res) => {
  const data = getJSON();
  const titleQuery = req.query.title;

  let idQuery = validate.queryValidate(data, res, titleQuery);
  if (!idQuery) return;
  res.send(data[idQuery]);
});

app.get("/notes/:id", (req, res) => {
  const data = getJSON();
  const requestedID = req.params.id;

  if (!validate.idValidate(data, req, res)) return;
  res.send(data[requestedID]);
});

app.post("/notes", (req, res) => {
  const data = getJSON();
  console.log(req.body);
  console.log(data.size);

  if (!validate.titleValidate(data, res, req.body.title)) return;
  res.send({ Status: "Note successfully added!" });
  util.addNotes(data, req);
});

app.patch("/notes/:id", (req, res) => {
  const data = getJSON();
  const params = {
    data: data,
    requestedID: req.params.id,
    updatedContent: req.body.content,
    updatedTitle: req.body.title
  };

  if (!validate.idValidate(data, req, res)) return;
  if (params.updatedTitle === null)
    return res.send({ error: "Title cannot be null" });
  if (
    params.updatedTitle !== undefined &&
    data[params.requestedID].title !== params.updatedTitle
  ) {
    if (!validate.titleValidate(data, res, params.updatedTitle)) {
      return;
    }
  }

  res.send({ Status: "Note successfully updated!" });
  util.updateNotes(params);
});

app.delete("/notes/:id", (req, res) => {
  const data = getJSON();
  const requestedID = req.params.id;
  if (!validate.idValidate(data, req, res)) return;
  delete data[requestedID];

  res.send({ Status: "Note successfully deleted" });
  util.writeNotes(data);
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
