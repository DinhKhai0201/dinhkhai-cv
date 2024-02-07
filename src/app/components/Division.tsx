import { FunctionComponent } from "react";

interface OwnProps {
  startYear: string;
  endYear?: string;
  position: string;
  company: string;
  children?: JSX.Element;
}

const Division: FunctionComponent<OwnProps> = (props) => {
  return (
    <div className={"text-[black]"}>
      <div className={"flex flex-wrap justify-between"}>
        <div className={"flex flex-col   mr-5 pr-5"}>
          <span className="text-[1em] font-bold">{props.position}</span>
          <span className="text-[0.89em]">{props.company}</span>
        </div>
        <div
          className={
            "min-w-[108px]"
          }
        >
          {props.startYear} - {props.endYear}
        </div>
      </div>
      {props.children}
      <p className={"tracking-[0] text-[0.89em]"} />
    </div>
  );
};

export default Division;
