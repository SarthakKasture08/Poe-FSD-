# Question 1 - Multipage College Website (Complete Explanation)

---

## 📌 Objective

To design and implement a multipage college website using HTML, CSS, and JavaScript. The website includes Home, About, Departments, Syllabus, and Contact pages with proper navigation and user interaction.

---

## 🌐 Technologies Used

### 🔹 HTML (HyperText Markup Language)

HTML is used to create the structure of web pages.

* Defines layout of pages like Home, About, Contact
* Uses tags like:

  * `<nav>` → navigation bar
  * `<ul>, <li>` → menu items
  * `<a>` → links between pages
  * `<form>` → contact form
  * `<input>, <textarea>` → user input fields

👉 HTML forms the backbone of the website.

---

### 🔹 CSS (Cascading Style Sheets)

CSS is used to design and style the website.

* Navbar styling using colors and spacing
* Flexbox used for alignment:

  ```css
  display: flex;
  ```
* Dropdown positioning using:

  ```css
  position: absolute;
  ```
* UI improvements using:

  * `box-shadow` → shadow effect
  * `border-radius` → rounded corners
  * `hover` → interactive effects

👉 CSS improves visual appearance and layout.

---

### 🔹 JavaScript

JavaScript is used to add functionality and interactivity.

* Dropdown menu toggle
* Image slider logic
* Form validation
* Event handling

👉 JavaScript makes the website dynamic.

---

## ⚙️ Implementation Details (Code Logic)

---

### 🔹 1. Multipage Navigation

```html
<a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="cse.html">CSE</a>
```

👉 Anchor tags are used to move between different pages
👉 Each page is a separate HTML file

---

### 🔹 2. Dropdown Menu (Click Based)

```html
<button onclick="toggleMenu()">Departments ▼</button>
<ul id="deptMenu">
```

```javascript
function toggleMenu() {
    let menu = document.getElementById("deptMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
```

👉 Clicking button shows/hides dropdown
👉 Uses DOM manipulation (`getElementById`)
👉 Uses `display` property to control visibility

---

### 🔹 3. Department Routing

```html
<a href="cse.html">CSE</a>
```

👉 Each department is a separate page
👉 Clicking navigates to that page

---

### 🔹 4. Image Slider

```javascript
let images = ["img1", "img2", "img3"];
let picIndex = 0;

function nextSlide() {
    picIndex = (picIndex + 1) % images.length;
    showSlide();
}
```

👉 Images stored in an array
👉 Index tracks current image
👉 `%` ensures looping

---

### 🔹 5. Form Validation

```javascript
function validateForm() {
    let name = document.getElementById("userName").value;

    if (name == "") {
        alert("All fields required");
        return false;
    }
}
```

👉 Prevents empty submission
👉 Uses alert for user feedback
👉 `return false` stops form submission

---

### 🔹 6. Email Sending (mailto)

```html
<form action="mailto:example@gmail.com" method="post">
```

👉 Opens default mail client
👉 Sends form data without backend

---

### 🔹 7. Syllabus Download

```html
<a href="syllabus.pdf" download>Download</a>
```

👉 `download` attribute forces file download
👉 Simple and effective implementation

---

## 🎯 Features

* Multipage website structure
* Navigation bar with clickable dropdown
* Department-wise separate pages
* Image slider using JavaScript
* Contact form with validation
* Email sending using mailto
* Syllabus PDF download
* Clean and responsive UI

---

## 🧠 Important Concepts (Viva)

---

### 🔹 What is HTML?

HTML is used to structure web pages using elements and tags.

---

### 🔹 What is CSS?

CSS is used to style and design web pages.

---

### 🔹 What is JavaScript?

JavaScript is used to add interactivity to web pages.

---

### 🔹 What is React?

React is a JavaScript library used to build dynamic UI using components.
(Not used here, but useful for advanced applications)

---

### 🔹 What is DOM?

DOM (Document Object Model) represents the structure of HTML as objects, allowing JavaScript to manipulate elements.

---

### 🔹 What is Event Handling?

Handling user actions like clicks using JavaScript functions.

Example:

```javascript
onclick="toggleMenu()"
```

---

### 🔹 What is Form Validation?

Checking input fields before submission to avoid incorrect data.

---

### 🔹 What is Flexbox?

CSS layout system used to align elements efficiently.

---

### 🔹 What is Multipage Website?

A website with multiple HTML files connected through navigation links.

---

## 🎤 Viva Ready Points

* Used HTML for structure, CSS for styling, JavaScript for logic
* Implemented multipage navigation using anchor tags
* Dropdown menu created using JavaScript click event
* Image slider implemented using array and index logic
* Form validation ensures correct user input
* Mailto used for sending email without backend
* Project is simple, efficient, and easy to maintain

---

## 📌 Conclusion

The project successfully demonstrates a multipage college website with proper navigation, UI design, and interactivity using basic web technologies. It is simple, functional, and suitable for academic evaluation.
