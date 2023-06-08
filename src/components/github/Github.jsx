import GitHubCalendar from "react-github-calendar";
import "./Github.css";

const Github = () => {
  return (
    <div className="github_container" id="github">
      <h1>Github Stats</h1>
      <div className="github_single_stats_container">
        <div className="github_single_stats">
          <img
            id="github-top-langs"
            width="70%"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=shivammchaudhary1&theme=algolia&show_icons=true&hide_border=false&layout=compact"
            alt="Github Stats"
          />
        </div>{" "}
        <div className="github_single_stats">
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=shivammchaudhary1&theme=algolia&hide_border=false"
            alt="Github Stats"
          />
        </div>
      </div>

      {/* calender  */}
      <div className="github_calender_div">
        <GitHubCalendar
          id="github-stats-card"
          style={{
            textAlign: "center",
            border: "1px solid white",
            margin: "auto",
            borderRadius: 5,
            padding: 5,
          }}
          username="shivammchaudhary1"
          className="github_calender_stats"
        />
      </div>
    </div>
  );
};
export default Github;

// <section id="github">
//       <h2>GitHub</h2>

//       <div className="container github_container">
//         <div className="img">
//           <img
//             id="github-streak-stats"
//             src="https://github-readme-streak-stats.herokuapp.com?user=shivammchaudhary1&theme=tokyonight-duo&hide_border=true"
//             alt="github stats"
//           />
//         </div>

//         {/* <div className='img'>
//            <img   id="github-top-langs"  src="  'https://github-readme-stats.vercel.app/api?username=shivammchaudhary1&show_icons=true&theme=radical'  " alt="stats" />
//            </div> */}

//         <div className="img">
//           <img
//             id="github-top-langs"
//             src="https://github-readme-stats.vercel.app/api/top-langs?username=shivammchaudhary1&hide=html"
//             alt="stats"
//           />
//         </div>

//         {/* https://github-readme-stats.vercel.app/api/top-langs?username=shivammchaudhary1&hide=html */}

//         <div className="img">
//           <img
//             id="github-stats-card"
//             src="https://github-readme-stats.vercel.app/api/top-langs/?username=shivammchaudhary1&layout=donut"
//             alt="chart"
//           />
//         </div>

//         <GitHubCalendar
//           username="shivammchaudhary1"
//           class="react-activity-calendar"
//         />

//         {/* <div class="react-activity-calendar">
//           <img
//             class="react-activity-calendar"
//             src="https://ghchart.rshah.org/shivammchaudhary1"
//             alt="chart"
//           />
//         </div> */}

//         {/* https://ghchart.rshah.org/shivammchaudhary1 */}
//       </div>
//     </section>
