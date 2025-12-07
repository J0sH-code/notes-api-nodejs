# 📘 Notes REST API (Node.js + Express)

A simple Notes API built using **Node.js**, **Express**, and a **JSON file as storage**.  
Supports full CRUD operations with validation for titles, IDs, and search queries.

---

## 🚀 Features

- Full CRUD (Create, Read, Update, Delete)
- Unique ID generation using `crypto-id`
- Search notes by title using query parameters
- Validation for:
  - Duplicate titles
  - Non-existent IDs
  - Search title results
- JSON file persistence (no external DB)
- Automatic timestamps (`createdAt`, `updatedAt`)

---

## 📦 Installation

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
```

---

## ▶️ Start the Server

```bash
node server.js
```

Server runs at:

```
http://localhost:3000
```

---

## 📚 API Endpoints

### **GET /notes**
Returns all notes.

---

### **GET /notes/:id**
Returns a note by its ID.

---

### **GET /notes/search?title=YourTitle**
Searches for a note by title.

---

### **POST /notes**
Create a new note.

**Request Body Example:**
```json
{
  "title": "My Note",
  "content": "Hello world"
}
```

---

### **PATCH /notes/:id**
Update the note's title and/or content.

**Partial updates supported.**

---

### **DELETE /notes/:id**
Deletes a note by ID.

---

## 🛠 Technology Stack

- Node.js  
- Express  
- crypto-id  
- JSON file as local storage  
- ES Modules  

---

## 📁 Project Structure

```
.
├── index.js          # Main application
├── getJSON.js        # Connects to stored notes
├── utils.js          # Utility funtions for routes
├── validators.js     # Input validators
├── notes.json         # Stored notes
├── package.json
└── README.md
```

---

## 🧑‍💻 Author

**Josh Ryle R. Santeno**

---

## 📜 License

This project is open source and free to use.

