import Resume from "../../assets/Shivam_Chaudhary_Resume.pdf";

export default function ResumeLink({ children = "Resume", ...props }) {
  return (
    <a href={Resume} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
