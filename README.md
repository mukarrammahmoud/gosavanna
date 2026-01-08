# 🧠 Antigravity Master Prompt

## Role
You are a **senior frontend architect, UI/UX designer, and motion designer**.

---

## Objective
Generate a **luxury, modern e-commerce landing page** for a fashion tech startup called **GoSavanna**, using:

- **React**
- **Tailwind CSS**
- **GSAP**
- **Motion**

With full support for:
- 🌗 Dark / Light mode  
- 🌍 Arabic / English languages  

---

## 🧱 Tech Stack & Architecture

- **Framework:** React (Vite or Next-ready structure)
- **Styling:** Tailwind CSS (using CSS variables for theming)
- **Animations:** GSAP + ScrollTrigger
- **Motion:** Framer Motion
- **State Management:** Simple UI state (theme + language only)
- **Backend:** None (no APIs, no forms, UI only)
- **Responsive:** Fully responsive & accessible

---

## 🌗 Theme System (Dark / Light)

- Implement a **theme toggle**
- Use **CSS variables** for all colors

### Light Mode
- Soft beige / sand / off-white
- Dark text
- Calm, luxury feeling

### Dark Mode
- Deep charcoal / black
- Gold or warm accent highlights

- Smooth animated theme transition  
  (fade / color interpolation)

---

## 🌍 Language System (AR / EN)

- Implement **language toggle**

### Arabic (Default)
- RTL layout
- Arabic luxury font

### English
- LTR layout
- Modern sans-serif font

- All text stored in a clean `translations` object
- Layout direction switches automatically based on selected language

---

## 🧩 Page Structure (Single Page)

### 1️⃣ Hero Section

#### Arabic
**Title:**  
جرّب أزياءك الفاخرة في راحة منزلك. قبل أن تدفع.

**Subtitle:**  
GoSavanna: خدمة التجربة المنزلية الأولى في السعودية التي تمنحك الثقة لاتخاذ القرار الصحيح.

**CTA Button:**  
اطلب دعوة الإطلاق

#### English
**Title:**  
Try luxury fashion from the comfort of your home. Before you pay.

**Subtitle:**  
GoSavanna is Saudi Arabia’s first home try-on service, giving you confidence to make the right decision.

**CTA Button:**  
Request Launch Invite

**Hero Includes:**
- Full-width layout
- Premium background image or gradient
- GSAP entrance animation (headline, subtitle, button)

---

### 2️⃣ How It Works

Three steps with icons & animations:

#### Arabic
1. **تصفح واطلب**  
   اختر ما يعجبك من أفضل المتاجر الشريكة

2. **جرّب في منزلك**  
   نوصل الطلب خلال ساعات، ولديك 8 ساعات للتجربة

3. **ادفع لما أحببته فقط**  
   ندفع فقط على القطع التي احتفظت بها

#### English
1. **Browse & Order**  
   Choose from the best partner stores

2. **Try at Home**  
   Delivered in hours, 8 hours to try comfortably

3. **Pay Only What You Love**  
   Pay only for what you keep

- Icons animate with **staggered GSAP animations on scroll**

---

### 3️⃣ The Problem

#### Arabic
**Title:**  
تسوق الأزياء أونلاين لا يجب أن يكون مقامرة.

**Text:**  
70% من قرارات الشراء لا تكتمل بسبب الخوف من المقاس والجودة وتعقيدات الإرجاع.  
GoSavanna تقضي على هذا التردد.

#### English
**Title:**  
Online fashion shopping shouldn’t be a gamble.

**Text:**  
70% of purchase decisions fail due to size uncertainty, quality concerns, and return complexity.  
GoSavanna eliminates this hesitation.

---

### 4️⃣ Our Motto

Centered statement with elegant animation:

- **Arabic:**  
  > "نحن لا نبيع ملابس، نحن نبيع الثقة."

- **English:**  
  > "We don’t sell clothes. We sell confidence."

---

### 5️⃣ Footer

- **GoSavanna**
- © 2026 GoSavanna. All rights reserved.
- Minimal, premium look

---

## 🎨 Visual Identity Guidelines

### Colors
- Derived from the logo
- Luxury neutrals with warm accent tones

### Fonts
- **Arabic:** Modern, elegant Arabic font
- **English:** Clean, premium sans-serif font

### Imagery
- High-end fashion & lifestyle stock photos

### Spacing & Hierarchy
- Calm
- Confident
- Investor-ready

---

## ✨ Animation Philosophy

- GSAP-powered animations
- Subtle, smooth, luxury motion
- Scroll-based reveals
- No over-animation

---

## 📦 Output Requirements

- Clean React component structure
- Tailwind CSS fully applied
- Theme toggle implemented
- Language toggle implemented
- Proper RTL / LTR handling
- Ready for static deployment
- Production-quality, maintainable code
