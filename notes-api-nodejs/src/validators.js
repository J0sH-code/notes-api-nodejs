export class validators {
  titleError = { error: "Title already exists" };
  typeError = { error: "Note not found" };

  titleValidate(data, res, newTitle) {
    for (const key in data) {
      if (data[key].title === newTitle) {
        res.send(this.titleError);
        return false;
      }
    }
    return true;
  }

  idValidate(data, req, res) {
    if (data[req.params.id] !== undefined) return true;
    res.send(this.typeError);
    return false;
  }

  queryValidate(data, res, titleQuery) {
    for (const key in data) {
      if (data[key].title === titleQuery) {
        return key;
      }
    }
    res.send(this.typeError);
    return false;
  }
}
