import { resume } from "../../assets/assets";

export default function ResumeLink({ children = "Resume", ...props }) {
  return (
    <a href={resume} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
