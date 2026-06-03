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

## CSS Fundamentals

### What is CSS ?

CSS, or Cascading Style Sheets, is used to style and design HTML webpages. While HTML provides the structure of the webpage, CSS controls its appearance, including colors, fonts, layouts, spacing, borders, and responsiveness.  

CSS works using a combination of selectors and properties. A selector identifies the HTML element to style, and properties define the visual changes to apply.  
*Example -*

```css
h1 {
    color: blue;
    font-size: 30px;
}
```

In this example, the heading color becomes blue and font size becomes 30 pixels.

### Methods to Apply CSS

1. **Inline CSS :** CSS is written directly inside style attribute.  

    ```html
    <p style = "color:red;">Hello World</p>
    ```

2. **Interal CSS :** CSS is written in same HTML file, but in separate style tag.

    ```html
    <style>
    p {
        color: green;
    }
    </style>
    ```

3. **External CSS :** CSS is written separately in a different file, which is then linked to the html file.

    ```html
    <link rel = "stylesheet" href = "style.css">
    ```

### Common CSS Properties

| Property           | Purpose          |
| ------------------ | ---------------- |
| `color`            | Text color       |
| `background-color` | Background color |
| `font-size`        | Text size        |
| `margin`           | Outside spacing  |
| `padding`          | Inside spacing   |
| `border`           | Border styling   |
| `width`            | Width            |
| `height`           | Height           |
| `display`          | Display behavior |

### CSS Selectors

Selectors are used to target HTML elements for styling. An element selector styles all elements of a specific type. A class selector starts with a dot (.) and styles elements having a specific class name. An ID selector starts with a hash (#) and styles a unique element. Selectors help to apply styles efficiently across webpages.

```CSS
p {
    color: blue;
}

.box {
    background-color: yellow;
}

#title {
    color: red;
}
```

### Flexbox Layout

Flexbox is a modern CSS layout system used to arrange elements efficiently. It simplifies alignment, spacing, and responsive layouts. To use Flexbox, the parent container must have display: flex.

```CSS
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

The justify-content property controls horizontal alignment, while align-items controls vertical alignment.

Flexbox is widely used for navigation bars, cards, galleries, and responsive webpage sections.

## Responsive Design

Responsive design is the technique of creating webpages that automatically adapt to different screen sizes and devices such as mobile phones, tablets, and desktop computers. A responsive website improves user experience by ensuring content remains readable and properly aligned on all devices.

One important part of responsive design is the viewport meta tag, which helps webpages scale correctly on mobile devices.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Fluid Layouts and Flexible Images

Responsive webpages often use fluid layouts instead of fixed-width layouts. In fluid layouts, widths are defined using percentages rather than fixed pixels.

```CSS
.container {
    width: 80%;
}
```

Images can also be made responsive by using the max-width: 100% property. This prevents images from overflowing outside their containers.

```CSS
img {
    max-width: 100%;
    height: auto;
}
```

### Media Queries

Media queries allow developers to apply different styles depending on the screen size or device type. They are one of the most important tools for responsive web design.

```CSS
@media screen and (max-width: 768px) {
    body {
        background-color: lightgray;
    }
}
```

In this example, the background color changes when the screen width becomes smaller than 768 pixels. Common breakpoints are:

- Mobile devices: less than 768px
- Tablets: 768px to 1024px
- Desktop screens: greater than 1024px

### Responsive Flexbox and Grid

Flexbox and CSS Grid are commonly used to create responsive layouts. Flexbox allows items to wrap into multiple rows using the flex-wrap property.

```CSS
.container {
    display: flex;
    flex-wrap: wrap;
}
```

CSS Grid divides webpages into rows and columns.

```CSS
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

Media queries can adjust the number of columns for smaller screens.

```CSS
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
}
```

Responsive design is important because it improves accessibility, user experience, SEO performance, and compatibility across multiple devices and screen sizes.
