import {
  Check,
  Code2,
  Dumbbell,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/portfolio";
import styles from "./ProjectVisual.module.css";

type ProjectVisualProps = {
  type: Project["visual"];
};

const bars = [42, 68, 54, 84, 62, 92, 72];

export function ProjectVisual({ type }: ProjectVisualProps) {
  if (type === "vibrant") {
    return (
      <div className={`${styles.visual} ${styles.inventory}`}>
        <div className={styles.windowBar}>
          <span />
          <span />
          <span />
          <div className={styles.address}>vibrant.cr/admin/inventory</div>
        </div>
        <div className={styles.appLayout}>
          <aside className={styles.sideRail}>
            <div className={styles.sideLogo}>
              <Dumbbell size={16} />
            </div>
            {[0, 1, 2, 3].map((item) => (
              <span key={item} className={item === 0 ? styles.activeLine : ""} />
            ))}
          </aside>
          <div className={styles.dashboard}>
            <div className={styles.dashHeader}>
              <div>
                <small>Vibrant Commerce</small>
                <strong>Inventory & Sales</strong>
              </div>
              <button>+ New product</button>
            </div>
            <div className={styles.statsRow}>
              <div>
                <small>Products</small>
                <strong>248</strong>
                <em>Active catalog</em>
              </div>
              <div>
                <small>Categories</small>
                <strong>12</strong>
                <em>Organized</em>
              </div>
              <div>
                <small>Low stock</small>
                <strong>18</strong>
                <em className={styles.warning}>Review</em>
              </div>
            </div>
            <div className={styles.chartCard}>
              <div className={styles.chartTop}>
                <span>Sales activity</span>
                <small>Weekly overview</small>
              </div>
              <div className={styles.chart}>
                {bars.map((bar, index) => (
                  <span
                    key={index}
                    style={{ height: `${bar}%` }}
                    className={index === 5 ? styles.highlightBar : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "medical") {
    return (
      <div className={`${styles.visual} ${styles.medical}`}>
        <div className={styles.medicalHeader}>
          <div className={styles.medicalLogo}>
            <Stethoscope size={17} />
          </div>
          <span>Clinic operations</span>
          <div className={styles.avatar}>DH</div>
        </div>
        <div className={styles.medicalBody}>
          <div className={styles.calendarHead}>
            <div>
              <small>Schedule</small>
              <strong>May 14, 2026</strong>
            </div>
            <div className={styles.liveChip}>12 appointments</div>
          </div>
          <div className={styles.schedule}>
            {[
              ["09:00", "Follow-up consultation", "Confirmed"],
              ["10:30", "General consultation", "In progress"],
              ["13:00", "New patient evaluation", "Confirmed"],
            ].map(([time, title, status], index) => (
              <div className={styles.appointment} key={time}>
                <time>{time}</time>
                <span className={styles.patientDot}>{index + 1}</span>
                <div>
                  <strong>{title}</strong>
                  <small>Patient record #{1024 + index}</small>
                </div>
                <em>{status}</em>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "monarca" || type === "concrebox") {
    const isMonarca = type === "monarca";

    return (
      <div
        className={`${styles.visual} ${styles.realVisual} ${
          isMonarca ? styles.realMonarca : styles.realConcrebox
        }`}
      >
        <div className={styles.browserFrame}>
          <div className={styles.browserBar}>
            <div>
              <span />
              <span />
              <span />
            </div>
            <small>
              {isMonarca
                ? "monarca-alpha.vercel.app"
                : "concrebox.vercel.app"}
            </small>
          </div>
          <div className={styles.screenshotViewport}>
            <Image
              src={
                isMonarca
                  ? "/projects/monarca-home.png"
                  : "/projects/concrebox-home.png"
              }
              alt={
                isMonarca
                  ? "Monarca Swimwear live website homepage"
                  : "Concrebox live website homepage"
              }
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              className={styles.realScreenshot}
              priority={false}
            />
          </div>
        </div>
      </div>
    );
  }

  if (type === "api") {
    return (
      <div className={`${styles.visual} ${styles.api}`}>
        <div className={styles.codeHeader}>
          <Code2 size={16} />
          <span>integration-service</span>
          <em>200 OK</em>
        </div>
        <div className={styles.apiFlow}>
          <div className={styles.endpoint}>
            <small>External source</small>
            <strong>GET /v1/resources</strong>
          </div>
          <span className={styles.connector} />
          <div className={`${styles.endpoint} ${styles.endpointActive}`}>
            <small>Spring service</small>
            <strong>Validate & normalize</strong>
          </div>
          <span className={styles.connector} />
          <div className={styles.endpoint}>
            <small>Application data</small>
            <strong>Typed response</strong>
          </div>
        </div>
        <div className={styles.logPanel}>
          {[
            ["AUTH", "Token validated", "12ms"],
            ["FETCH", "Resource received", "184ms"],
            ["MAP", "24 records normalized", "8ms"],
          ].map(([label, text, time]) => (
            <div key={label}>
              <Check size={13} />
              <strong>{label}</strong>
              <span>{text}</span>
              <time>{time}</time>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
