# How to Update Project Links

Your portfolio is now set up with interactive project cards. Here's how to update the Figma prototype and GitHub links for each project.

## 📝 Finding Your Links

### For Figma Prototypes:

1. Open your Figma file
2. Click on **Share** (top right)
3. Copy the share link
4. Choose **Anyone with the link** option to make it shareable

### For GitHub Repositories:

1. Go to your GitHub profile
2. Copy the repository URL from the browser address bar
3. Example format: `https://github.com/Betelhemze/repository-name`

---

## 🔗 Updating the Links in Your Portfolio

Open `index.html` and find each project section. Replace the placeholder URLs:

### Project 1: Backend API System

Find this section around line 276:

```html
<a
  href="https://www.figma.com/your-api-system-figma-link"
  target="_blank"
  rel="noopener noreferrer"
  class="link-btn"
  >View Prototype</a
>

<a
  href="https://github.com/Betelhemze/your-api-system-repo"
  target="_blank"
  rel="noopener noreferrer"
  class="link-btn secondary"
  >GitHub</a
>
```

Replace with your actual links:

```html
<a
  href="YOUR_FIGMA_LINK_HERE"
  target="_blank"
  rel="noopener noreferrer"
  class="link-btn"
  >View Prototype</a
>

<a
  href="YOUR_GITHUB_LINK_HERE"
  target="_blank"
  rel="noopener noreferrer"
  class="link-btn secondary"
  >GitHub</a
>
```

### Project 2: Mentorship Platform UI

Find this section around line 300:

```html
<a
  href="https://www.figma.com/your-mentorship-platform-link"
  target="_blank"
  rel="noopener noreferrer"
  class="link-btn"
  >View Prototype</a
>

<a
  href="https://github.com/Betelhemze/mentorship-platform"
  target="_blank"
  rel="noopener noreferrer"
  class="link-btn secondary"
  >GitHub</a
>
```

Replace with your actual links.

### Project 3: Online Voting Platform

Find this section around line 324:

```html
<a
  href="https://www.figma.com/your-voting-platform-link"
  target="_blank"
  rel="noopener noreferrer"
  class="link-btn"
  >View Prototype</a
>

<a
  href="https://github.com/Betelhemze/voting-platform"
  target="_blank"
  rel="noopener noreferrer"
  class="link-btn secondary"
  >GitHub</a
>
```

Replace with your actual links.

---

## ✅ How It Works

- **View Prototype** button → Opens your Figma design (opens in new tab)
- **GitHub** button → Opens your GitHub repository (opens in new tab)
- Both buttons have `target="_blank"` so they open in a new tab without closing your portfolio
- `rel="noopener noreferrer"` is a security feature (best practice)

---

## 💡 Tips

1. **Test the links** - After updating, click them to make sure they work correctly
2. **Make Figma links public** - Share your Figma prototypes so visitors can view them
3. **Keep GitHub repos updated** - Your code should reflect your best work
4. **Add more projects** - You can duplicate a project card and add new ones

---

## 🎯 Quick Template

Use this template to quickly add more projects:

```html
<!-- PROJECT X -->
<article class="project-card">
  <div class="project-header">
    <h3>Your Project Title</h3>
  </div>

  <p>Brief description of your project...</p>

  <span class="project-tag"> Tech · Stack · Used </span>

  <div class="project-links">
    <a
      href="YOUR_FIGMA_LINK"
      target="_blank"
      rel="noopener noreferrer"
      class="link-btn"
      >View Prototype</a
    >

    <a
      href="YOUR_GITHUB_LINK"
      target="_blank"
      rel="noopener noreferrer"
      class="link-btn secondary"
      >GitHub</a
    >
  </div>
</article>
```

---

Need help? Just ask! 🚀
