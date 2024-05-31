import { useNavigate } from "react-router-dom";

function ContactInfo() {
  const navigate = useNavigate();
  return (
    <div className="">
      <p onClick={() => navigate(-1)}>go back</p>
      contact
    </div>
  );
}

export default ContactInfo;
