# 📁 File Upload System

A simple and modern **File Upload System** built using **HTML, CSS, and JavaScript**.

This project allows users to select and upload files, view the uploaded files directly on the webpage, and keep file information saved in the browser's **LocalStorage** so that the data remains available even after refreshing the page.

> **Note:** This is a frontend-only project. Files are not uploaded to a backend server or cloud storage. The project uses the browser's LocalStorage to persist file information.

---

## 🚀 Features

* 📤 Select and upload files from your device
* 📋 Display uploaded files on the webpage
* 💾 Store file information in LocalStorage
* 🔄 Uploaded file data remains after page refresh
* 🗑️ Remove uploaded files
* ⚡ Fast and lightweight
* 📱 Responsive user interface
* 🎨 Clean and simple design
* 🌐 Works directly in the browser
* 🔒 No backend or database required

---

## 🛠️ Technologies Used

| Technology   | Purpose                             |
| ------------ | ----------------------------------- |
| HTML5        | Structure of the webpage            |
| CSS3         | Styling and responsive design       |
| JavaScript   | File handling and application logic |
| File API     | Reading and handling selected files |
| LocalStorage | Persisting uploaded file data       |

---

## 📂 Project Structure

```text
File-upload-system/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

> Your actual file names may be different depending on your project structure.

---

## ⚙️ How It Works

The application follows a simple workflow:

```text
Select File
     ↓
Read File Information
     ↓
Store File Data
     ↓
Save Data in LocalStorage
     ↓
Display File on Web Page
     ↓
Refresh Page
     ↓
Load Data from LocalStorage
```

### 1. Select a File

The user selects a file using the file input.

JavaScript listens for the `change` event and gets the selected file.

### 2. Process the File

The application reads the selected file and collects the required information, such as:

* File name
* File type
* File size
* File data

### 3. Store Data

The file information is stored in the browser's LocalStorage.

This allows the application to maintain the uploaded file data after a page refresh.

### 4. Display Uploaded Files

The stored file data is retrieved and dynamically displayed on the webpage.

### 5. Refresh Persistence

When the page is refreshed, JavaScript reads the previously stored data from LocalStorage and displays the files again.

---

## 💾 LocalStorage

This project uses the browser's LocalStorage to persist data.

For example:

```javascript
localStorage.setItem("files", JSON.stringify(files));
```

To retrieve the stored data:

```javascript
const files = JSON.parse(localStorage.getItem("files")) || [];
```

This means the uploaded file information doesn't disappear when the page is refreshed.

---

## ⚠️ Important Limitation

LocalStorage is intended for storing relatively small amounts of browser data.

This project is therefore suitable for **learning and demonstration purposes**, but it is not a production file-storage solution.

A real-world file upload application would normally use:

```text
Frontend
   ↓
Backend API
   ↓
File Storage / Cloud Storage
   ↓
Database
```

Examples of production storage solutions include cloud object storage or a dedicated file-storage service.

---

## 🖥️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/LittleCoder-SK/File-upload-system.git
```

### 2. Navigate to the Project

```bash
cd File-upload-system
```

### 3. Open the Project

Open `index.html` in your browser.

You can also use **VS Code Live Server** for a better development experience.

---

## 📸 Project Preview

You can add screenshots of your application here:

```markdown
![File Upload System](./screenshots/file-upload.png)
```

Recommended screenshots:

* Upload interface
* File selected
* Uploaded file displayed
* Multiple uploaded files

---

## 🎯 Learning Objectives

This project was created to practice and understand:

* JavaScript DOM manipulation
* Event listeners
* File input handling
* JavaScript File API
* Arrays and objects
* JSON serialization
* LocalStorage
* Dynamic HTML rendering
* Basic CRUD operations
* Frontend project structure

---

## 🔮 Future Improvements

Some features that can be added in future versions:

* [ ] Drag & Drop file upload
* [ ] File preview
* [✅] Download uploaded files
* [ ] Upload progress indicator
* [ ] File type validation
* [ ] File size validation
* [ ] Search uploaded files
* [ ] Sort files by name/date/size
* [ ] Multiple file selection
* [✅] Dark mode
* [ ] Backend integration
* [ ] Database storage
* [ ] Cloud file storage
* [ ] User authentication

---

## 🤝 Contributing

Contributions are welcome!

If you want to improve this project:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Make your changes
4. Commit your changes

```bash
git add .
git commit -m "Add new feature"
```

5. Push the branch

```bash
git push origin feature/new-feature
```

6. Create a Pull Request

---

## 📄 License

This project is open-source and available for learning and personal use.

---

## 👨‍💻 Author

**Solu Kumar**

GitHub: **LittleCoder-SK**

---

## ⭐ Support

If you found this project useful for learning JavaScript and frontend development, consider giving the repository a ⭐ on GitHub.

Thanks for checking out the project! 🚀

