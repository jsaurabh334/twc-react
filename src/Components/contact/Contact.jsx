import ContactForm from './ContactForm'
import ContactOptions from './ContactOptions'
import Before from './Before'
import contact01 from "../../assets/contactus01.svg"

const Contact = () => {
  return (
    <div>
      <img className='w-full'
        src={contact01}
      />
      <ContactForm/>
      <ContactOptions/>
      <Before/>
    </div>
  );
};

export default Contact;
