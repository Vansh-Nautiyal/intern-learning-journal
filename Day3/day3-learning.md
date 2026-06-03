# Day 3 : HTML and CSS

## HTML Basics

### What is HTML ?

HTML (HyperText Markup Language) is the standard language used to create web pages. It provides the basic structure of a website by organizing content into headings, paragraphs, images, links, lists, forms, and many other elements. HTML works together with CSS and JavaScript, where HTML handles the structure, CSS manages the design, and JavaScript adds interactivity.
  
### Basic Structure of an HTML Document

``` html
<!DOCTYPE html>
<html>
<head>
    <title>My Webpage</title>
</head>
<body>

    <h1>Hello World</h1>
    <p>This is a paragraph.</p>

</body>
</html>
```

### Important HTML Tags

| Tag | Purpose |
| --- | --- |
| `<html>` | Root element of webpage |
| `<head>` | Contains metadata |
| `<title>` | Sets browser tab title |
| `<body>` | Main webpage content |
| `<h1> to <h6>` | Headings, h1 - largest and h6 - smallest |
| `<p>` | Paragraph |
| `<a>` | Hyperlink |
| `<img>` | Image |
| `<ul>` | Unordered List |
| `<ol>` | Ordered List |
| `<li>` | List item |
| `<div>` | Container block |

### Common Tags and their Usage

- **Headings**

  ```html
  <h1>Main Heading</h1>
  <h2>Sub Heading</h2>
  <h3>Smaller Heading</h3>
  ```

- **Paragraph Tag**

  ```html
  <p>This is a paragraph.</p>
  <br>
  <p>Another paragraph.</p>
  ```

- **Links**

  ```html
  <a href="https://google.com">Visit Website</a>
  ```

- **Unordered Lists**

  ```html
  <ul>
    <li>Apple</li>
    <li>Mango</li>
  </ul>
  ```

- **Ordered Lists**

  ```html
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
  ```

- **Forms**

  ```html
  <form>
    <input type = "text" placeholder = "Enter name">
    <input type = "password">
    <button>Submit</button>
  </form>
  ```

### Semantic HTML

Semantic Tags improve code readability and SEO (Search Engine Optimization)

| Tag | Meaning |
| --- | --- |
| `<header>` | Top Section |
| `<nav>` | Navigation Bar |
| `<main>` | Main Content |
| `<section>` | Section Block |
| `<article>` | Independent Content |
| `<footer>` | Bottom Section |

### HTML Comments

Comments in HTML are written to improve the readability of code and make debugging easier.  
Syntax of HTML Comments -  

```html
<!-- This is a comment -->
```
