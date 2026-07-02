# PathFind Website Application

A complete static desktop website application for a youth opportunity hub.

## Files
- `index.html` - website structure
- `css/style.css` - design, desktop layout, animations, transitions
- `js/script.js` - search, filters, saved opportunities, login/register demo, notifications, admin posting demo
- `assets/logo.png` - PathFind logo icon based on the approved logo image

## How to run in VS Code
1. Open the folder in VS Code.
2. Install the VS Code extension **Live Server** if you do not have it yet.
3. Right-click `index.html`.
4. Click **Open with Live Server**.

You can also double-click `index.html`, but Live Server is better for testing.

## Demo Login Accounts
Admin:
- Email: `admin@pathfind.ph`
- Password: `admin12345`

User:
- Email: `user@pathfind.ph`
- Password: `user12345`

## Notes
This project uses HTML, CSS, and JavaScript. It saves demo data using the browser's `localStorage`, so it works without a database.

## Latest Pricing Update

The website includes monthly subscription plans:

- Private institutions: Primary customer segment. Premium Model at ₱1,500/month. Institution accounts can post opportunities and events, manage listings and deadlines, target student groups, and track engagement/visibility.
- Students: Secondary customer segment. Premium Model at ₱39/month for deadline tracking, personalized alerts, saved opportunities, and priority notifications.

## Subscription Display Rules

- Not logged in: the homepage does not show the PathFind Plan/subscription section yet.
- Not logged in: the Subscriptions page shows both Institution and Student plans so visitors can compare prices and decide what account type to use.
- Logged in as `admin@pathfind.ph`: the homepage shows only the Institution Plan.
- Logged in as `user@pathfind.ph`: the homepage shows only the Student Premium Plan.
- Logged in users can click Subscribe on the plan shown for their role.

The Subscribe button is a demo action and shows a confirmation toast. Payment/checkout integration can be added in a future version.

## Admin Visibility Update

- The Admin navigation tab is hidden unless the logged-in account is an admin/institution account.
- Student users and logged-out visitors will not see the Admin tab in the top navigation.
- Direct attempts to open the Admin page while logged out or logged in as a student are redirected to Login or Home.


## Mobile-Friendly Update

This version includes responsive layouts for phone users. The navigation turns into a hamburger menu on smaller screens, cards stack into one column, buttons become touch-friendly, and forms, subscription cards, filters, modals, and opportunity listings resize properly for students using mobile phones.
