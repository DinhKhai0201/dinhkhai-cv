import { FunctionComponent } from "react";

interface OwnProps {
  imgUrl: string;
}

const ProfilePicture: FunctionComponent<OwnProps> = ({ imgUrl }) => {
  return (
    <div className={"w-[104px] mx-auto my-0"}>
      <div
        className={
          "w-[66px] h-[66px]  overflow-hidden bg-[#848484] left-[19px] top-[9px]"
        }
      >
        <img
          className="content-[''] w-[71px] block ml-0 mt-0 left-0"
          src={imgUrl}
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
