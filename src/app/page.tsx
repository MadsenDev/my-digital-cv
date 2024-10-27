"use client";

import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import WorkExperienceTimeline from "@/components/WorkExperienceTimeline";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import LanguagesSection from "@/components/LanguagesSection";
import HobbiesSection from "@/components/HobbiesSection";
import ThankYouSection from "@/components/ThankYouSection";

import { aboutMe } from "@/data/aboutMe";
import { workExperiences } from "@/data/workExperiences";
import { educations } from "@/data/educations";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { languages } from "@/data/languages";
import { hobbies } from "@/data/hobbies";

export default function Home() {
  return (
    <>
      {/* Digital CV */}
      <div className="digital-cv overflow-x-hidden max-w-screen mx-auto">
        <Hero />
        <AboutMe />
        <WorkExperienceTimeline />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <LanguagesSection />
        <HobbiesSection />
        <ThankYouSection />
      </div>

      {/* Printable CV */}
      <div className="printable-cv px-8 py-10 max-w-screen-lg mx-auto text-gray-800">
        {/* About Me Section */}
        <section className="mb-12">
    <div className="flex flex-col md:flex-row items-center justify-between">
      {/* Left side: Profile Image and Intro */}
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-6xl font-bold mb-6">Christoffer Madsen</h1>
        <img
          src={aboutMe.profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover mx-auto md:mx-0 mb-4"
        />
        <p className="text-lg leading-relaxed">{aboutMe.intro}</p>
      </div>

      {/* Right side: QR Code */}
      <div className="md:w-1/2 flex justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Se min digitale CV</h2>
          <img
            src="/qr-code.svg"
            alt="QR Code"
            className="w-32 h-32 mx-auto"
          />
          <p className="text-gray-600 mt-2">
            Scan QR-koden for å besøke min digitale CV
          </p>
        </div>
      </div>
    </div>
  </section>

        {/* Work Experience Section */}
        <section className="mb-12 avoid-page-break">
          <h2 className="text-4xl font-bold mb-4 border-b pb-2">
            Arbeidserfaring
          </h2>
          {workExperiences.map((experience, index) => (
            <div key={index} className="mb-6 avoid-page-break">
              <h3 className="text-xl font-semibold">
                {experience.title} - {experience.company}
              </h3>
              <p className="text-gray-600 italic mb-2">{experience.duration}</p>
              <p className="leading-relaxed">{experience.description}</p>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="mb-12 avoid-page-break">
          <h2 className="text-4xl font-bold mb-4 border-b pb-2">Utdanning</h2>
          {educations.map((education, index) => (
            <div key={index} className="mb-6 avoid-page-break">
              <h3 className="text-xl font-semibold">
                {education.degree} - {education.school}
              </h3>
              <p className="text-gray-600 italic mb-2">{education.duration}</p>
              <p className="leading-relaxed">{education.description}</p>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section className="mb-12 avoid-page-break">
          <h2 className="text-4xl font-bold mb-4 border-b pb-2">Ferdigheter</h2>
          <div className="grid grid-cols-2 gap-6 avoid-page-break">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg avoid-page-break"
              >
                <h3 className="font-semibold text-xl">{skill.name}</h3>
                <p className="text-gray-600">
                  {skill.level} ({skill.proficiency}%)
                </p>
                <div className="relative w-full h-2 mt-2 bg-gray-300 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-12 avoid-page-break">
          <h2 className="text-4xl font-bold mb-4 border-b pb-2">Språk</h2>
          <div className="grid grid-cols-2 gap-6 avoid-page-break">
            {languages.map((language, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg avoid-page-break"
              >
                <h3 className="font-semibold text-xl">{language.name}</h3>
                <p className="text-gray-600">
                  {language.level} ({language.proficiency}%)
                </p>
                <div className="relative w-full h-2 mt-2 bg-gray-300 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                    style={{ width: `${language.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12 avoid-page-break">
          <h2 className="text-4xl font-bold mb-4 border-b pb-2">Prosjekter</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-6 avoid-page-break">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="leading-relaxed mb-2">{project.description}</p>
              <p className="text-gray-600">
                Teknologier: {project.technologies.join(", ")}
              </p>
            </div>
          ))}
        </section>

        {/* Hobbies Section */}
        <section className="mb-12 avoid-page-break">
          <h2 className="text-4xl font-bold mb-4 border-b pb-2">
            Hobbyer & Interesser
          </h2>
          <div className="grid grid-cols-2 gap-6 avoid-page-break">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg text-center avoid-page-break"
              >
                <h3 className="font-semibold text-xl">{hobby.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
