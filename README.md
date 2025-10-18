# 🪪 Profile Card
A responsive and accessible Profile Card built with semantic HTML and modern CSS. The card displays key user information, including name, bio, avatar, current time (in milliseconds), hobbies, dislikes, and social media links.
This project focuses on semantic structure, accessibility, responsiveness, and testability using provided data-testid attributes.

## 🧩 Project Overview
The Profile Card component displays structured user information in a visually appealing and semantically correct layout. It demonstrates core front-end principles such as semantic HTML, accessibility, responsive design, and dynamic content rendering (using JavaScript to show the current time in milliseconds).



## 🧱 Structure & Semantics
The HTML must use semantic elements for accessibility and logical structure.
Example layout:

```html
<article data-testid="test-profile-card">
  <header>
    <h2 data-testid="test-user-name">John Doe</h2>
  </header>

  <figure>
    <img
      src="avatar.jpg"
      alt="Profile photo of John Doe"
      data-testid="test-user-avatar"
    />
  </figure>

  <p data-testid="test-user-bio">
    Frontend developer passionate about design systems and accessibility.
  </p>

  <p data-testid="test-user-time">1691234567890</p>

  <nav>
    <ul class="flex" data-testid="test-user-social-links">
      <li><a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-twitter">Twitter</a></li>
      <li><a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-github">GitHub</a></li>
    </ul>
  </nav>

  <section data-testid="test-user-hobbies">
    <h3>Hobbies</h3>
    <ul>
      <li>Cycling</li>
      <li>Photography</li>
    </ul>
  </section>

  <section data-testid="test-user-dislikes">
    <h3>Dislikes</h3>
    <ul>
      <li>Spam emails</li>
      <li>Slow websites</li>
    </ul>
  </section>
</article>
```

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/your-username/profile-card.git
cd profile-card
```

2. Open index.html in your browser to view the card.
3. Optionally, modify script.js to dynamically update the time.
