import { Activity, CalendarDays, Gauge, Timer } from "lucide-react";
import { MetricCard } from "./components/MetricCard";
import { formatPace, pacePerKilometer } from "./lib/pace";

const targetDistanceKm = 10;
const targetTimeMinutes = 50;
const weeklyDistanceKm = 32;

export function App() {
  const targetPace = pacePerKilometer(targetDistanceKm, targetTimeMinutes);

  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Running pace planner</p>
          <h1>Pace smarter. Train clearer. Show up ready.</h1>
          <p className="hero-text">
            PaceUP turns race goals into practical pace targets, weekly training
            blocks, and progress signals runners can act on.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#dashboard">
              Open dashboard
            </a>
            <a className="button button-secondary" href="#roadmap">
              View roadmap
            </a>
          </div>
        </div>
        <div className="pace-panel" aria-label="Target pace preview">
          <span className="panel-label">10K target</span>
          <strong>{formatPace(targetPace)} / km</strong>
          <span>Goal: {targetTimeMinutes} min</span>
        </div>
      </section>

      <section id="dashboard" className="metric-grid" aria-label="Dashboard">
        <MetricCard
          icon={<Gauge aria-hidden="true" />}
          label="Target pace"
          value={`${formatPace(targetPace)} / km`}
        />
        <MetricCard
          icon={<Activity aria-hidden="true" />}
          label="Weekly volume"
          value={`${weeklyDistanceKm} km`}
        />
        <MetricCard
          icon={<Timer aria-hidden="true" />}
          label="Tempo session"
          value="4 x 1 km"
        />
        <MetricCard
          icon={<CalendarDays aria-hidden="true" />}
          label="Next race"
          value="10K plan"
        />
      </section>

      <section id="roadmap" className="section-block">
        <h2>Initial product scope</h2>
        <div className="feature-list">
          <article>
            <h3>Pace calculator</h3>
            <p>Convert distance and goal time into clear min/km targets.</p>
          </article>
          <article>
            <h3>Training planner</h3>
            <p>Build a balanced week with easy, tempo, interval, and recovery days.</p>
          </article>
          <article>
            <h3>Progress insight</h3>
            <p>Summarize recent runs and show whether training load is moving up.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
