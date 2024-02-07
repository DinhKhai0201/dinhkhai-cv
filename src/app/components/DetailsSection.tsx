import { FunctionComponent } from "react";
import { CvData } from "../models/CvData";
import Division from "./Division";
import Section from "./Section";
import Link from "next/link";

interface OwnProps {
  detailsData: CvData;
}

const JobDescription = ({
  jobDescription,
}: {
  jobDescription: string[] | string;
}) =>
  Array.isArray(jobDescription) ? (
    <ul>
      {jobDescription.map((line, i) => (
        <li className="text-[0.9em]" key={i}>
          <span>{" + "}</span>
          {line}
        </li>
      ))}
    </ul>
  ) : (
    <p>{jobDescription}</p>
  );

const DetailsSection: FunctionComponent<OwnProps> = ({
  detailsData: { experiences, skills, works },
}) => (
  <div
    className={
      "flex-[3] pl-[30px] pr-[30px] pt-10 pb-[25px] p-2.5 bg-[#eae8eb]"
    }
  >
    <Section title="Experiences">
      <>
        {experiences.map((exp, i) => (
          <Division key={i} {...exp}>
            <div className="py-4">
              <div> - Technologies used: {exp.technologies}</div>
              <div> - Website: <Link href={exp.website}>{exp.website}</Link></div>
              <div> - Description:</div>
              <JobDescription jobDescription={exp.jobDescription} />
            </div>
          </Division>
        ))}
      </>
    </Section>
    <Section title="Workskills" extraClassName="work-skills">
      <ul>
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </Section>
    <Section title="Works">
      <>
        {works.map((cert, i) => (
          <Division key={i} {...cert} />
        ))}
      </>
    </Section>
  </div>
);

export default DetailsSection;
