// import React from "react";
// import "./Header.css";
// import HeaderButton from "./HeaderButton";
// import SocialLink from "./SocialLink";
// import ProfileImage from "../../assets/Shivam_Chaudhary.jpg";

// const Header = () => {
//   return (
//     <div className="header_container">
//       <h3 id="hello">Hello, I'm</h3>
//       <h1 id="intro_name">Shivam Kumar Chaudhary</h1>
//       <h4 id="intro_designation">Full Stack Developer</h4>
//       <HeaderButton />
//       <SocialLink />
//       <div>
//         <img
//           className="header_profile_image"
//           src={ProfileImage}
//           alt="Shivam Chaudhary"
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import "./Header.css";
import HeaderButton from "./HeaderButton";
import SocialLink from "./SocialLink";
import ProfileImage from "../../assets/Shivam_Chaudhary.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <h3 className="header-hello">Hello, I'm</h3>
      <h1 className="header-name">Shivam Kumar Chaudhary</h1>
      <h4 className="header-designation">Full Stack Developer</h4>
      <HeaderButton />
      <SocialLink />
      <div>
        <img
          className="header-profile-image"
          src={ProfileImage}
          alt="Shivam Chaudhary"
        />
      </div>
    </div>
  );
};

export default Header;
