
# Simple Dashboard

Build a Simple Dashboard as a single-page application in React.js or Next.js using the design from this Figma link: Figma Link
Basic Requirements
Home Page:

- Pod Online Status
- Total Deliveries - contains drop down option or Last Week and Last Month
- Total Time in Pod - contains drop down option or Last Week and Last Month
- Total Users - contains drop down option or Last Week and Last Month
- Mock the API route: [GET] /home
  Content-Type: application/json Response: {
  pod: { locationName: { podName: { podOnlineStatus: boolean } } },
  Stats: { totalDeliveries: int, totalTimeInPod: int (in minutes), totalUsers: int } }
- Ability to change from light mode to dark mode.
- Include tests.
  Extra Features (Optional)
  Responsiveness:
- Make the app responsive.
- The app should function properly on various mobile devices.
  Report
- Displays a table with export CSV functionality
- Mock the API route: [GET] /report
  Content-Type: application/json
  Response: { Table1: { /\*_ make up your own data to display _/ } }
- Mock the API route: [GET] /report?fileType=csv
  Content-Type: text/csv
  Response: { /\*_ Table1 as csv _/ }
  Settings Page:
- Ability to change display name
- Ability to change language (i18n and l10n)
  Page:
  Accessibility: - Aria

## Summary

This challenge app is about dashboard according to provided figma design, it works either with desktop or mobile platforms, it's possible to switch to a dark theme and go to different client routes such as Home, Report and settings. Also mock APIs are provided as well for home and report routes.

## Installation

- Clone repo

- Install npm dependencies

```bash
npm install
```

- Run back and frontend concurrently

```bash
npm run dev
```

## Tests

```bash
npm run test
```

## Retrospective

For basic frontend requirements spent around 6 hours spent among three days.

- Decided to use Chakra UI since it seems to be easier to set up styling to match UI requirements, also because it has built in utilities for dark theme.
- Spent so much time trying to set and extend a theme.
- Spent some time trying to be more precise on sizes as mobile was an optional but (at least for me) is required these days.
- Spent so much time trying to refactor and still needs some more refactoring.
- Working in progress on unit tests
- Overall, I really enjoyed making this challenge.
