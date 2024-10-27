# Digital CV of Christoffer Madsen

This project is a **Digital CV** for showcasing my skills, work experiences, projects, and more in a clean, interactive format. Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, it provides a well-organized digital CV experience with animations, custom styling, and a printable view.

### [Live Site](https://cv.madsens.dev)

## Features

- **Responsive Layout**: The CV adapts seamlessly to desktop and mobile screens, ensuring an optimal viewing experience.
- **Interactive Sections**: Sections for work experience, education, skills, projects, languages, hobbies, and more, with smooth animations.
- **Printable View**: A dedicated, styled version optimized for printing or saving as a PDF.
- **Reusable Data Files**: All data (work experience, skills, etc.) are stored in separate files, making it easy to update and reuse.
- **Dynamic Animations**: Uses **Framer Motion** to add interactive and visually appealing animations throughout the CV.
- **Open Graph and Twitter Meta Tags**: Optimized for social media previews when sharing.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for custom and responsive designs
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for engaging animations
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) for skill and hobby illustrations
- **Deployment**: Hosted on a DigitalOcean server with an **Apache** setup and **PM2** for process management.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MadsenDev/my-digital-cv.git
   cd digital-cv
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Start the production server**:
   ```bash
   npm start
   ```

6. **Generate Static Files** (optional):
   ```bash
   npm run export
   ```

## Key Components

- **`<Hero />`**: Introductory section for initial presentation.
- **`<AboutMe />`**: Profile introduction and background.
- **`<WorkExperienceTimeline />`**: Visualized timeline of work experience with animations.
- **`<EducationSection />`**: Display of educational qualifications.
- **`<SkillsSection />`**: Grid display of skills with proficiency bars.
- **`<LanguagesSection />`**: Language proficiency indicators.
- **`<HobbiesSection />`**: Icons and descriptions of hobbies.
- **`<ThankYouSection />`**: A closing thank-you message with contact details.

## Deployment

### Requirements
- **Node.js** and **npm**
- **PM2** for process management
- **Apache** for server setup (optional if using another server)

### Steps
1. **Build** the project:
   ```bash
   npm run build
   ```

2. **Start** the project with PM2:
   ```bash
   pm2 start npm --name "cv-app" -- start
   ```

3. **Configure Apache** (if using):
   - Set up a virtual host pointing to `http://localhost:3000` for production deployment.
   - Enable SSL if using HTTPS.

### Printing the CV
The CV has a print-specific layout triggered via `@media print` CSS rules. This layout removes unnecessary elements like headers/footers and focuses on delivering a well-structured, printable version.

## Contributing

Feel free to fork the repository and create pull requests for any enhancements, bug fixes, or additional features.

1. **Fork the repository**
2. **Create a new branch** for your feature
3. **Commit your changes** and push the branch
4. **Open a Pull Request**

## License

This project is open-source and available under the **MIT License**.
