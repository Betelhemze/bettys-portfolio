# Photo Styling Guide 📸

Your profile photo now has **professional styling and animations**. Here's what's included and how to customize it.

---

## ✨ Current Features

### 1. **Animated Background Halo**

- Subtle pulsing gradient circle behind your photo
- Creates depth and draws attention to your face
- Animates smoothly on page load

### 2. **Professional Shadow**

- Multi-layered shadow for 3D effect
- Subtle inset highlight for polish
- Enhanced on hover for more depth

### 3. **Smooth Hover Animation**

- Photo lifts up slightly when you hover
- Slight zoom effect (1.02x scale)
- Brightness and saturation increase slightly
- Creates engaging interaction

### 4. **Accent Line**

- Subtle decorative line below photo
- Professional minimalist touch

### 5. **Fade-in Animation**

- Photo smoothly fades in on page load
- Creates polished first impression

---

## 🎨 Styling Variants

You can choose different photo frame styles by uncommenting one of these options in `styles.css`:

### Option 1: Circular Photo

```css
/* VARIANT 1: Circular photo */
.profile-photo {
  border-radius: 50% !important;
}
```

**Best for:** Formal/professional headshots
**How:** Uncomment those 3 lines in the CSS

### Option 2: Gradient Border Frame

```css
/* VARIANT 2: Gradient border frame */
.profile-photo {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  padding: 3px;
  border-radius: 20px;
}
```

**Best for:** Modern, vibrant portfolios
**How:** Uncomment those 4 lines

### Option 3: Glass-morphism Effect

```css
/* VARIANT 3: Glass-morphism effect */
.profile-photo {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
}
```

**Best for:** Contemporary, trendy look
**How:** Uncomment those 3 lines

### Option 4: Professional Minimal (Thick Border)

```css
/* VARIANT 4: Professional minimal */
.profile-photo {
  border: 4px solid var(--primary) !important;
  border-radius: 12px !important;
}
```

**Best for:** Corporate/formal portfolios
**How:** Uncomment those 3 lines

---

## 📋 Steps to Apply a Variant

1. Open `styles.css`
2. Find the "Optional styling variants" section (around line 231)
3. **Comment out** the current photo styling (if you want to try variants)
4. **Uncomment** ONE of the 4 variants you want to try
5. Save and refresh your browser
6. If you like it, keep it! If not, try another variant

**Example - To use Circular Photo:**

```css
/* Currently this is commented out: */
/* VARIANT 1: Circular photo */
/*
.profile-photo {
  border-radius: 50% !important;
}
*/

/* Uncomment it like this: */
/* VARIANT 1: Circular photo */
.profile-photo {
  border-radius: 50% !important;
}
```

---

## 💡 Tips for Best Results

### Photo Quality

- Use a **high-resolution** photo (at least 800x800px)
- **Clear face and shoulders** visible
- **Professional background** (solid color or blurred)
- **Good lighting** - face should be well-lit

### File Format

- **PNG** (with transparency) - works best
- **JPG** - also good for photos
- **WebP** - modern format, great compression

### Perfect Photo Checklist

✅ Clear, centered headshot
✅ Professional clothing
✅ Good lighting (no harsh shadows)
✅ Neutral or blurred background
✅ Genuine smile/confident expression
✅ High quality resolution
✅ Square or near-square aspect ratio

---

## 🎬 Customizing Animations

### Change Hover Effect

Find `.profile-photo:hover` and adjust:

```css
.profile-photo:hover {
  transform: translateY(-12px) scale(1.02); /* Change these values */
  /* ... */
}
```

- `translateY(-12px)` → How much it lifts up (increase = more lift)
- `scale(1.02)` → How much it zooms (1.05 = bigger zoom, 1.01 = subtle)

### Change Background Halo Size

Find `.hero-image::before` and adjust:

```css
.hero-image::before {
  width: 450px; /* Make this bigger or smaller */
  height: 450px; /* Match the width */
  /* ... */
}
```

### Change Animation Speed

Find `animation: fadeInUp` and adjust `0.8s`:

```css
animation: fadeInUp 0.8s ease forwards 0.2s;
/* ^ change this */
```

- `0.8s` = animation duration
- `0.2s` (at end) = delay before animation starts

---

## 🔗 Additional Customizations

### Change Shadow Color

The shadow uses `rgba(79, 70, 229, 0.2)` - these are RGB values for your primary color.

- Change the numbers to adjust shadow intensity
- 0.2 = 20% opacity (lower = lighter shadow)

### Change Border Style

```css
border: 2px solid var(--border);
/* 2px = border thickness */
/* solid = border style (can be dashed, dotted, etc.) */
```

---

## ✅ What's Ready to Go

Your photo already has:

- ✅ Beautiful hover effects
- ✅ Smooth fade-in animation
- ✅ Professional shadow styling
- ✅ Decorative background halo
- ✅ Responsive sizing (scales on mobile)
- ✅ Dark mode support

**No additional setup needed - it works out of the box!**

---

## 🎯 Recommended Setup

For the **best professional look**, we recommend:

1. Use a **square or near-square photo**
2. **Crop tightly** on your face/shoulders
3. **Clear background** (solid color or subtle blur)
4. Keep the **default rounded corners** (20px border-radius)
5. Use the **current hover animations**

---

Need help choosing? Try one variant for a day and see how it feels on your portfolio!
