import { FunctionComponent } from "react";

interface OwnProps {
  text: string;
}

const IconTitle: FunctionComponent<OwnProps> = ({ text }) => {
  return (
    <div className={"flex h-[30px] mb-[25px]"}>
      <div>
        <span>{text[0].toUpperCase()}</span>
      </div>
      <h3 className={"text-[#1492b6] font-bold ml-5 mr-0 my-0"}>{text}</h3>
    </div>
  );
};

export default IconTitle;
