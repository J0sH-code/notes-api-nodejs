import { createId } from "crypto-id";
import fs from "fs";
import { JSONpath } from "./getJSON.js";

export class utils {
  updateNotes({ data, requestedID, updatedContent, updatedTitle}) {
    if (updatedContent !== undefined) {
      data[requestedID].content = updatedContent;
    }

    if (updatedTitle !== undefined) {
      data[requestedID].title = updatedTitle;
    }

    data[requestedID]["updatedAt"] = new Date().toISOString();
    this.writeNotes(data);
  }

  addNotes(data, req) {
    let hashId = this.generateId();
    let dateToday = new Date().toISOString();
    data[`${hashId}`] = {
      title: req.body.title,
      content: req.body.content,
      createdAt: dateToday,
    };
    this.writeNotes(data);
  }

  generateId() {
    let id = createId(5);
    return id;
  }

  writeNotes(data) {
    fs.writeFileSync(JSONpath, JSON.stringify(data, null, 4));
  }
}
