"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ContactRound,
  Database,
  Download,
  GitFork,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  ServerCog,
  Sparkles,
  SquareTerminal,
} from "lucide-react";
import {
  experience,
  links,
  metrics,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { Navigation } from "./Navigation";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import styles from "./Portfolio.module.css";

const skillIcons = [ServerCog, Code2, Database, SquareTerminal, CheckCircle2];

export function Portfolio() {
  const [submitted, setSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name}\nEmail: ${email}`,
    );

    setSubmitted(true);
    window.location.href = `mailto:dh746925@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main id="top" className={styles.main}>
      <Navigation />

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroGrid} />
        <motion.div
          className={styles.heroGlow}
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.4, 0.72, 0.4], scale: [0.96, 1.04, 0.96] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className={styles.container}>
          <motion.div
            className={styles.availability}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span />
            Available for 2026 software engineering opportunities
          </motion.div>

          <motion.div
            className={styles.heroContent}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className={styles.kicker}>Backend developer · Full-stack engineer</p>
            <h1 id="hero-title">
              I build software that makes{" "}
              <span>real operations run better.</span>
            </h1>
            <p className={styles.heroSummary}>
              I&apos;m Diego Herrera Chaves, a Software Engineering student
              graduating in 2026. I design and deploy reliable business
              applications with Java, Spring Boot, React, MySQL, Docker and
              Linux.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#projects">
                View selected work <ArrowDown size={16} />
              </a>
              <a
                className={styles.secondaryButton}
                href={links.resume}
                download
              >
                <Download size={16} /> Download resume
              </a>
              <a className={styles.textButton} href="#contact">
                Contact me <ArrowRight size={15} />
              </a>
            </div>

            <div className={styles.socialRow}>
              <a href={links.github} target="_blank" rel="noreferrer">
                <GitFork size={16} /> GitHub
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <ContactRound size={16} /> LinkedIn
              </a>
              <a href={links.email}>
                <Mail size={16} /> Email
              </a>
              <span>
                <MapPin size={15} /> Heredia, Costa Rica
              </span>
            </div>
          </motion.div>

          <motion.div
            className={styles.signalPanel}
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.signalTop}>
              <span>Engineering profile</span>
              <em>Open to work</em>
            </div>
            <div className={styles.identity}>
              <div className={styles.photoPlaceholder}>DH</div>
              <div>
                <strong>Diego Herrera Chaves</strong>
                <span>Software Engineer</span>
              </div>
            </div>
            <div className={styles.signalList}>
              <div>
                <span>Core focus</span>
                <strong>Backend systems</strong>
              </div>
              <div>
                <span>Delivery</span>
                <strong>Full-stack products</strong>
              </div>
              <div>
                <span>Infrastructure</span>
                <strong>Docker · Linux · VPS</strong>
              </div>
              <div>
                <span>Languages</span>
                <strong>Spanish · English B2</strong>
              </div>
            </div>
            <div className={styles.terminal}>
              <div>
                <span>●</span>
                <span>●</span>
                <span>●</span>
              </div>
              <p>
                <i>$</i> shipping reliable software
              </p>
              <p>
                <i>✓</i> production deployment ready
              </p>
            </div>
          </motion.div>
        </div>

        <div className={styles.heroFooter}>
          <span>Scroll to explore</span>
          <div />
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionIndex}>01</span>
              <span className={styles.eyebrow}>Profile</span>
            </div>
            <h2>
              Business context first.{" "}
              <span>Then the right technical solution.</span>
            </h2>
          </Reveal>

          <div className={styles.aboutGrid}>
            <Reveal className={styles.aboutCopy}>
              <p className={styles.lead}>
                I&apos;m a backend-focused developer who enjoys turning
                operational friction into software people can depend on.
              </p>
              <p>
                My work spans REST API design, relational database modeling,
                responsive React interfaces and Linux deployments. I&apos;ve
                built internal tools for healthcare and inventory operations,
                automated repetitive workflows, and taken applications from
                requirements to a secured VPS.
              </p>
              <p>
                I care about clear architecture, maintainable code and the
                details that make software feel trustworthy — useful error
                states, predictable data and interfaces that respect the
                user&apos;s time.
              </p>
            </Reveal>

            <div className={styles.metricsGrid}>
              {metrics.map((metric, index) => (
                <Reveal
                  key={metric.label}
                  className={styles.metric}
                  delay={index * 0.06}
                >
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                  <small>{metric.detail}</small>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className={styles.valueStrip}>
            <div>
              <Sparkles size={16} />
              <span>What I bring</span>
            </div>
            <p>
              Backend depth, full-stack delivery and the ability to understand
              the business process behind the ticket.
            </p>
            <a href="#experience">
              See experience <ArrowRight size={15} />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="stack" className={`${styles.section} ${styles.stackSection}`}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionIndex}>02</span>
              <span className={styles.eyebrow}>Technical toolkit</span>
            </div>
            <h2>
              A practical stack for{" "}
              <span>building and operating modern products.</span>
            </h2>
          </Reveal>

          <div className={styles.skillGrid}>
            {skillGroups.map((group, index) => {
              const Icon = skillIcons[index];
              return (
                <Reveal
                  className={styles.skillCard}
                  key={group.title}
                  delay={index * 0.055}
                >
                  <div className={styles.skillIcon}>
                    <Icon size={18} />
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div>
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className={styles.projectsSection}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionIndex}>03</span>
              <span className={styles.eyebrow}>Selected work</span>
            </div>
            <h2>
              From operational need{" "}
              <span>to working software in production.</span>
            </h2>
            <p>
              Case studies focused on the problem, engineering decisions and
              business outcome — not just the interface.
            </p>
          </Reveal>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className={styles.section}>
        <div className={styles.container}>
          <Reveal className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionIndex}>04</span>
              <span className={styles.eyebrow}>Experience</span>
            </div>
            <h2>
              Hands-on work with{" "}
              <span>real workflows, users and deployments.</span>
            </h2>
          </Reveal>

          <div className={styles.experienceLayout}>
            <div className={styles.timeline}>
              {experience.map((item, index) => (
                <Reveal
                  className={styles.timelineItem}
                  key={`${item.role}-${item.company}`}
                  delay={index * 0.08}
                >
                  <div className={styles.timelineMarker}>
                    <BriefcaseBusiness size={15} />
                  </div>
                  <div className={styles.timelineContent}>
                    <span className={styles.period}>{item.period}</span>
                    <h3>{item.role}</h3>
                    <p className={styles.company}>{item.company}</p>
                    <p className={styles.roleSummary}>{item.summary}</p>
                    <ul>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className={styles.educationCard}>
              <div className={styles.educationIcon}>
                <GraduationCap size={19} />
              </div>
              <span className={styles.eyebrow}>Education</span>
              <h3>Bachelor&apos;s Degree in Software Engineering</h3>
              <p>Universidad Latina de Costa Rica</p>
              <div className={styles.graduation}>
                <span>Expected graduation</span>
                <strong>December 2026</strong>
              </div>
              <div className={styles.school}>
                <span>High School Diploma</span>
                <strong>Westland High School · 2022</strong>
              </div>
              <a href={links.resume} download>
                <Download size={15} /> Full resume
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactGlow} />
        <div className={styles.container}>
          <Reveal className={styles.contactIntro}>
            <span className={styles.sectionIndex}>05</span>
            <span className={styles.eyebrow}>Contact</span>
            <h2>
              Let&apos;s build something{" "}
              <span>great together.</span>
            </h2>
            <p>
              I&apos;m currently open to Software Engineer, Backend Developer
              and Full-Stack Developer opportunities.
            </p>
            <div className={styles.contactLinks}>
              <a href={links.email}>
                <Mail size={16} />
                <span>
                  Email
                  <strong>dh746925@gmail.com</strong>
                </span>
                <ArrowUpRight size={15} />
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                <GitFork size={16} />
                <span>
                  GitHub
                  <strong>@dhc0510</strong>
                </span>
                <ArrowUpRight size={15} />
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <ContactRound size={16} />
                <span>
                  LinkedIn
                  <strong>Diego Herrera Chaves</strong>
                </span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>

          <Reveal className={styles.formCard} delay={0.1}>
            <div className={styles.formHead}>
              <div>
                <Layers3 size={17} />
              </div>
              <span>Start a conversation</span>
            </div>
            <form onSubmit={handleSubmit}>
              <label>
                Your name
                <input
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  required
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  required
                />
              </label>
              <label>
                How can I help?
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about the role, project or idea..."
                  required
                />
              </label>
              <button type="submit">
                Send message <ArrowUpRight size={16} />
              </button>
              <p className={styles.formNote} aria-live="polite">
                {submitted
                  ? "Your email app should now be open with the message ready."
                  : "This opens your default email app — no data is stored."}
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>
            <strong>Diego Herrera Chaves</strong>
            <span>Software Engineer · Heredia, Costa Rica</span>
          </div>
          <p>Designed and engineered with intention.</p>
          <a href="#top">
            Back to top <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </main>
  );
}
