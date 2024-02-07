import { FunctionComponent } from "react";

interface OwnProps {
  label: string;
  value: string;
  href?: string;
}

const ContactItem: FunctionComponent<OwnProps> = ({ href, label, value }) => {
  return (
    <div>
      <p className="block font-extrabold">{label}</p>
      {href ? <a href={href}>{value}</a> : <span>{value}</span>}
    </div>
  );
};

export default ContactItem;
