---
title: "Holliston Agricultural Commission"
client: "Holliston Agricultural Commission"
tagline: "A town resource that existed, technically. Nobody could find it, use it, or read it on a phone."
category: "Web Design"
services: ["Web Design & Development", "Accessibility Audit", "Content Migration", "Basic SEO"]
stats:
  - label: "Page Views"
    value: "+180%"
  - label: "Lighthouse Score"
    value: "92"
  - label: "Event Attendance"
    value: "3x"
  - label: "Broken Links"
    value: "0"
pubDate: 2026-07-27
featured: false
testimonial:
  quote: "People used to call the town hall to ask when the farmers' market was. Now they just look it up. That sounds small but it's not — it means the thing we built is actually being used."
  author: "Margaret Ellison"
  role: "Commission Chair"
timeline: "4 weeks design + build"
budget: "Sliding-scale municipal rate"
ongoing: "Annual check-in, hosting maintenance, and a standing call us if the Google Sheet breaks agreement"
---

## The Situation

The Holliston Agricultural Commission serves a small Massachusetts town — maintaining community gardens, organizing farmers' markets, running educational programs, and managing conservation land. Important work. Their website was a relic from the early 2000s: nested tables, Times New Roman, a hit counter, and PDFs that took eleven seconds to load on a desktop connection.

The commission members are volunteers. They'd been meaning to "fix the website" for about six years. Every town meeting, someone would mention it. Nothing happened because nobody knew where to start, and the quotes they'd gotten from web agencies started at $15k — for a volunteer commission with a $2,000 annual budget.

## What We Found

The site had 34 pages. **Nine of them were broken.** The event calendar was a static HTML table last updated fourteen months prior. The farmer directory listed three people who had retired and one who had passed away. Meeting minutes were uploaded as scanned images of printed documents — technically accessible, functionally useless. The site wasn't responsive, so on a phone (where 70% of their traffic came from) you had to pinch-zoom to read anything.

## What We Did

- Rebuilt the entire site as a clean, accessible, mobile-first resource hub. Five main sections: About, Events, Farmers Directory, Conservation Land, and Meeting Records.
- Created a simple event calendar that commission members can update via a shared Google Sheet — no CMS login, no training needed, no "I forgot the password" tickets.
- Built a searchable farmer directory with profiles, products, and season availability. Removed the deceased and retired entries. Added the four new vendors who'd been operating without a listing.
- Converted all meeting minutes from scanned images to searchable, accessible HTML text. Added proper headings, dates, and a reverse-chronological archive.
- Implemented proper semantic HTML, ARIA labels, and keyboard navigation. The site now passes WCAG 2.1 AA — important for a municipal resource that serves elderly residents.
- Set up basic SEO: proper title tags, meta descriptions, structured data for events, and a sitemap submitted to Google Search Console.

## The Result

Page views tripled in the first two months, driven almost entirely by the event calendar and farmer directory — the two things people were actually looking for. The Lighthouse performance score went from 23 to 92. Event attendance at the farmers' market and community garden workshops roughly tripled, which the commission attributes to people actually finding the event information on their phones.

The selectboard noted a measurable drop in "where do I find X" emails to the town clerk's office. **The site now answers questions instead of generating them.**
