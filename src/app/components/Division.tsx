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
      <div className={"flex flex-wrap items-center"}>
        <div
          className={
            "min-w-[108px] mr-5 pl-2.5 pr-5 py-[7px] border-r-2 border-r-[#3d3d3f] border-solid"
          }
        >
          {props.startYear} - {props.endYear}
        </div>
        <div className={"flex flex-col"}>
          <span className="text-[1em] font-bold">{props.position}</span>
          <span className="text-[0.89em]">{props.company}</span>
        </div>
      </div>
      {props.children}
      <p className={"tracking-[0] text-[0.89em]"} />
    </div>
  );
};

export default Division;
