import React from "react";
import "./github.css";
import GitHubCalendar from "react-github-calendar";

export const Github = () => {
  return (
    <section id="github">
      <h2>GitHub</h2>

      <div className="container github_container">
        <div className="img">
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=shivammchaudhary1&theme=tokyonight-duo&hide_border=true"
            alt="github stats"
          />
        </div>

        {/* <div className='img'>
           <img   id="github-top-langs"  src="  'https://github-readme-stats.vercel.app/api?username=shivammchaudhary1&show_icons=true&theme=radical'  " alt="stats" />
           </div> */}

        <div className="img">
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=shivammchaudhary1&hide=html"
            alt="stats"
          />
        </div>

        {/* https://github-readme-stats.vercel.app/api/top-langs?username=shivammchaudhary1&hide=html */}

        <div className="img">
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=shivammchaudhary1&layout=donut"
            alt="chart"
          />
        </div>

        <GitHubCalendar
          username="shivammchaudhary1"
          class="react-activity-calendar"
        />

        {/* <div class="react-activity-calendar">
          <img
            class="react-activity-calendar"
            src="https://ghchart.rshah.org/shivammchaudhary1"
            alt="chart"
          />
        </div> */}

        {/* https://ghchart.rshah.org/shivammchaudhary1 */}
      </div>
    </section>
  );
};
