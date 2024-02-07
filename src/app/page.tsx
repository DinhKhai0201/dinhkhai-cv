import PersonalSection from "./components/PersonalSection";
import { CvData } from "./models/CvData";
import cv_content from './cv-content.json';
import DetailsSection from "./components/DetailsSection";

export default function Home() {
  return (
    <div
      className={
        "flex items-stretch flex-wrap shadow-[-37px_67px_96px_-20px_#6d6d6d] overflow-hidden max-w-[968px] mt-[30px] mb-16 mx-auto rounded-[3px]"
      }
    >
      <PersonalSection {...(cv_content as CvData)} />
      <DetailsSection detailsData={cv_content as CvData} />
    </div>
  );
}
