# Rebecca Slinn Portfolio

This is my responsive portfolio site for my web designer and developer career.

![A screen shot of Rebecca Slinn's portfolio website](https://rebeccode.github.io/portfolio/img/site-demo.gif)

* [Live Here](https://rebeccode.github.io/portfolio/) - Click the link to see the site.

## Explanation

I have written out the guiding ideas and principles I had in mind when creating this site.

### English and Japanese

I wrote the original homepage in English. As I'm based in Tokyo, I translated the site by myself into Japanese.

### CSS Layout

I use CSS Grid to arrange the content into columns. Then I use media queries to change font sizes and columns so it looks good on any device.

For example,
```css
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  body {
    font-size: 25px;
  }
```

### HTML Content

I use HTML5 semantic tags to show the content clearly according to W3C standards.

```html
<header></header>
<main></main>
<content></content>
<footer></footer>
```

### Accessibility

I include alt attributes for images for users with different accessibility requirements (like using screen readers).

```html
<img id="profile-pic" src="img/becky-357x414.png" alt="A cartoon illustration of Rebecca">
```

### FontAwesome

I used FontAwesome for the social media logos and other icons because it is kept up to date and it is a font - which makes resizing and coloring with CSS easy. It is supported by all browsers and it only takes a single HTTP request to load all of the font characters, so it is quicker than individual image files.

* [FontAwesome](https://fontawesome.com/) - For social media logos
