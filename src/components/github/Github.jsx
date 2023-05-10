import React from 'react'
import './github.css'

export const Github = () => {
  return (
    <section id='github'>
        <h2>GitHub</h2>

        <div className='container github_container'>
            <div id="github-streak-stats" className='img'>
               <img src="https://github-readme-streak-stats.herokuapp.com?user=shivammchaudhary1&theme=tokyonight-duo&hide_border=true" alt="github stats" />
            </div>

           <div id="github-top-langs" className='img'>
           <img src="https://github-readme-stats.vercel.app/api?username=shivammchaudhary1&show_icons=true&theme=radical" alt="stats" />
           </div>

           <div id="github-stats-card" className='img'>
           <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=shivammchaudhary1&layout=donut" alt="chart" />
           </div>
        </div>
    </section>
  )
}
