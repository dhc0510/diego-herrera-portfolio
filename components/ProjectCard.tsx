"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, GitFork, LockKeyhole } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { links } from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`${styles.card} ${project.featured ? styles.featured : ""}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.06, 0.18),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <ProjectVisual type={project.visual} />
      <div className={styles.content}>
        <div className={styles.projectTop}>
          <div>
            <span className={styles.number}>{project.number}</span>
            <span className={styles.category}>{project.category}</span>
          </div>
          {project.featured && <span className={styles.flag}>Featured case study</span>}
        </div>

        <h3>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>

        <div className={styles.caseGrid}>
          <div>
            <span>Challenge</span>
            <p>{project.problem}</p>
          </div>
          <div>
            <span>Outcome</span>
            <p>{project.impact}</p>
          </div>
        </div>

        <div className={styles.architecture}>
          <span>Architecture</span>
          <div>
            {project.architecture.map((item, itemIndex) => (
              <span key={item}>
                {item}
                {itemIndex < project.architecture.length - 1 && <i>→</i>}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.metaGrid}>
          <div>
            <span className={styles.metaLabel}>Core capabilities</span>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className={styles.metaLabel}>Technology</span>
            <div className={styles.stack}>
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <a
            href={project.githubUrl ?? links.github}
            target="_blank"
            rel="noreferrer"
          >
            {project.privateProject ? <LockKeyhole size={15} /> : <GitFork size={15} />}
            {project.privateProject
              ? "Private repository"
              : project.githubUrl
                ? "View repository"
                : "GitHub profile"}
          </a>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live demo <ExternalLink size={15} />
            </a>
          ) : (
            <a href="#contact">
              Request walkthrough <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
