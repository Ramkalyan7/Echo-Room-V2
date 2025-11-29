Zoom Clone — Next.js & TypeScript
🤖 Introduction

This project is a Zoom-like video conferencing app built using Next.js and TypeScript. With it, users can sign in securely, start or join meetings, and use features like recording, screen sharing, and managing participants.

If you ever need help or run into bugs, there’s a large Discord community of over 30,000 developers who are always helping each other out.

⚙️ Tech Stack

Next.js

TypeScript

Clerk

getstream

shadcn

Tailwind CSS

🔋 Features
👉 Authentication

Secure login using Clerk, supporting both social login and email/password sign-in.

👉 Start a New Meeting

Launch a meeting instantly after choosing your camera and mic settings.

👉 Meeting Controls

Participants can:

Record the meeting

React with emojis

Share their screen

Mute/unmute

Adjust audio

Switch layouts

Open the participant list

Pin/mute/unmute/block others

Allow video sharing

👉 Leaving or Ending the Meeting

Participants can leave anytime. The meeting host can end the meeting for everyone.

👉 Schedule Meetings

Set up meetings for a later time. You’ll find them in the Upcoming Meetings section for easy sharing or starting.

👉 Past Meetings

View details of previous meetings.

👉 Recorded Meetings

Watch recordings of meetings you’ve attended or hosted.

👉 Personal Room

Each user gets a permanent personal meeting link to share with anyone.

👉 Join with a Link

Simply paste a meeting link to join someone else’s session.

👉 Secure Real-time System

All activities update instantly and securely, keeping user data safe.

👉 Fully Responsive

Works smoothly on all screen sizes, from phones to desktops.

🤸 Quick Start
Prerequisites

Before installing, make sure you have:

Git

Node.js

npm

Clone the Repository
git clone https://github.com/adrianhajdin/zoom-clone.git
cd zoom-clone

Install Dependencies
npm install

Add Environment Variables

Create a .env file in the project root:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=


Fill in your actual Clerk and getstream credentials.

Run the App
npm run dev


Then open:
http://localhost:3000
