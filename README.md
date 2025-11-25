# Smart Campus Portal — Frontend Prototype

## Group Members:
- Muhammad Umer
- Subhan Faisal

## Project Overview
A multi-module Smart Campus Portal frontend prototype built using HTML5, CSS3, Bootstrap 5 and vanilla JavaScript. This prototype demonstrates UI flows for login, announcements, attendance, events, clubs and contact/support.

## Full Module/Page List

| Module/Page Name | Purpose/Functionality | Responsible Member |
|------------------|----------------------|--------------------|
| Home Page | Overview of portal with quick access sections | Subhan Faisal |
| Student/Faculty Login | Authentication UI, validation, role selection | Muhammad Umer |
| Announcements | Display campus notices, search, filter | Subhan Faisal |
| Attendance Tracker | Attendance dashboard, charts, dynamic display | Muhammad Umer |
| Event Calendar | Calendar UI, upcoming events, modals | Muhammad Umer |
| Club Management | List of clubs, join requests, pop-ups | Subhan Faisal |
| Contact/Support | Form with JS validation | Muhammad Umer |
| About Page | Project description | Muhammad Umer |

Feel free to add more modules or expand responsibilities.

## Features
- Responsive multi-page layout (mobile-first)
- Responsive navbar and smooth scroll
- Live search and filtering (Announcements, Clubs)
- Modal popups for events and joining clubs
- Dynamic attendance display with progress bars
- Client-side form validation for all forms

## Tools & Libraries Used
- HTML5
- CSS3 (Flexbox / Grid)
- Bootstrap 5 (CDN)
- Vanilla JavaScript

## How to run the project
1. Download or clone the repository to your local machine.
2. Open the project folder and open `index.html` in your browser.
3. You can navigate to other pages using the top navigation.

Note: This is a static frontend prototype — no backend is required. To publish, you can use GitHub Pages by pushing this repository to GitHub and enabling Pages on the `main` branch.

## Folder Structure
```
/project-root
   /css
      style.css
   /js
      main.js
      announcements.js
      events.js
      clubs.js
      attendance.js
      validation.js
   /assets
      /images
         placeholder-hero.svg
         placeholder-event.svg
   index.html
   login.html
   announcements.html
   attendance.html
   events.html
   clubs.html
   contact.html
   about.html
   README.md
```

## Notes for Contributors
- Each page is self-contained and links to shared CSS and JS files. Keep changes modular so multiple contributors can work in parallel.
- Add unit test or documentation files as needed in future iterations.
