import { Activity, CalendarDays, Gauge, Timer } from "lucide-react";
import { useMemo, useState } from "react";
import { MetricCard } from "./components/MetricCard";
import {
  estimatedFinishTime,
  formatDuration,
  formatPace,
  pacePerKilometer,
} from "./lib/pace";

const trainingWeek = [
  { day: "Tue", session: "Easy run", detail: "6 km", tone: "easy" },
  { day: "Thu", session: "Tempo", detail: "4 x 1 km", tone: "tempo" },
  { day: "Sat", session: "Recovery", detail: "4 km", tone: "recovery" },
  { day: "Sun", session: "Long run", detail: "12 km", tone: "long" },
];

export function App() {
  const [distanceKm, setDistanceKm] = useState(10);
  const [targetMinutes, setTargetMinutes] = useState(50);

  const targetPace = useMemo(
    () => pacePerKilometer(distanceKm, targetMinutes),
    [distanceKm, targetMinutes],
  );
  const fiveKilometerEstimate = estimatedFinishTime(5, targetPace);
  const weeklyDistanceKm = trainingWeek.reduce(
    (total, session) => total + Number.parseFloat(session.detail) || total,
    0,
  );

  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Running pace planner</p>
          <h1>Turn a race goal into a pace you can train for.</h1>
          <p className="hero-text">
            Set a distance and target time. PaceUP calculates the pace and gives
            you a compact weekly plan to work from.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#dashboard">
              Open dashboard
            </a>
            <a className="button button-secondary" href="#week">
              See training week
            </a>
          </div>
        </div>
        <form className="pace-panel" onSubmit={(event) => event.preventDefault()}>
          <span className="panel-label">Pace calculator</span>
          <div className="field-grid">
            <label>
              Distance
              <span className="input-wrap">
                <input
                  min="1"
                  max="100"
                  step="0.1"
                  type="number"
                  value={distanceKm}
                  onChange={(event) =>
                    setDistanceKm(Math.max(0.1, Number(event.target.value)))
                  }
                />
                <span>km</span>
              </span>
            </label>
            <label>
              Target time
              <span className="input-wrap">
                <input
                  min="1"
                  max="1440"
                  type="number"
                  value={targetMinutes}
                  onChange={(event) =>
                    setTargetMinutes(Math.max(1, Number(event.target.value)))
                  }
                />
                <span>min</span>
              </span>
            </label>
          </div>
          <div className="pace-result" aria-live="polite">
            <span>Target pace</span>
            <strong>{formatPace(targetPace)}</strong>
            <span>min / km</span>
          </div>
        </form>
      </section>

      <section id="dashboard" className="metric-grid" aria-label="Dashboard">
        <MetricCard
          icon={<Gauge aria-hidden="true" />}
          label="Target pace"
          value={`${formatPace(targetPace)} / km`}
        />
        <MetricCard
          icon={<Activity aria-hidden="true" />}
          label="5K estimate"
          value={formatDuration(fiveKilometerEstimate)}
        />
        <MetricCard
          icon={<Timer aria-hidden="true" />}
          label="Tempo session"
          value="4 x 1 km"
        />
        <MetricCard
          icon={<CalendarDays aria-hidden="true" />}
          label="Plan volume"
          value={`${weeklyDistanceKm} km`}
        />
      </section>

      <section id="week" className="section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">Example block</p>
            <h2>A balanced training week</h2>
          </div>
          <p>Four sessions with enough space for rest and strength work.</p>
        </div>
        <div className="week-grid">
          {trainingWeek.map((item) => (
            <article className={`session-card ${item.tone}`} key={item.day}>
              <span>{item.day}</span>
              <h3>{item.session}</h3>
              <strong>{item.detail}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
