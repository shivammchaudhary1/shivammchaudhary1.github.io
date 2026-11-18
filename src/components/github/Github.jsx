import { Component, lazy, Suspense, useEffect, useRef, useState } from "react";
import "./github.css";

const GitHubCalendar = lazy(() =>
  import("react-github-calendar").then((module) => ({
    default: module.GitHubCalendar,
  })),
);
const profile = "https://github.com/shivammchaudhary1";

class CalendarBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <a
        className="github-fallback"
        href={profile}
        target="_blank"
        rel="noopener noreferrer"
      >
        View contributions on GitHub
      </a>
    ) : (
      this.props.children
    );
  }
}

function StatImage({ id, src, alt, width, height }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <a
      className="github-fallback"
      href={profile}
      target="_blank"
      rel="noopener noreferrer"
    >
      View {alt.toLowerCase()} on GitHub
    </a>
  ) : (
    <img
      id={id}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

const Github = () => {
  const calendar = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(calendar.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="github_container"
      id="github"
      aria-labelledby="github-title"
    >
      <h2 id="github-title">Github Stats</h2>
      <div className="github_single_stats_container">
        <div className="github_single_stats">
          <StatImage
            id="github-top-langs"
            width="300"
            height="165"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=shivammchaudhary1&theme=algolia&show_icons=true&hide_border=false&layout=compact"
            alt="Most used languages"
          />
        </div>
        <div className="github_single_stats">
          <StatImage
            id="github-streak-stats"
            width="495"
            height="195"
            src="https://github-readme-streak-stats.herokuapp.com/?user=shivammchaudhary1&theme=algolia&hide_border=false"
            alt="Contribution streak"
          />
        </div>
      </div>
      <div className="github_calender_div" ref={calendar}>
        {visible ? (
          <CalendarBoundary>
            <Suspense
              fallback={
                <p className="calendar-placeholder">Loading contributions…</p>
              }
            >
              <GitHubCalendar
                username="shivammchaudhary1"
                className="github_calender_stats"
                colorScheme="dark"
                errorMessage="Contributions are unavailable right now. Use the GitHub link below."
              />
            </Suspense>
          </CalendarBoundary>
        ) : (
          <p className="calendar-placeholder">GitHub contributions</p>
        )}
      </div>
      <a
        className="github-fallback"
        href={profile}
        target="_blank"
        rel="noopener noreferrer"
      >
        View profile on GitHub
      </a>
    </section>
  );
};
export default Github;
