import Form from '@/components/Form/Form';
import styles from './ContactHome.module.scss';

const ContactHome = () => {
  return (
    <section>
      <div className={`container ${styles.contactHomeContainer} `}>
        <Form />
      </div>
    </section>
  );
};

export default ContactHome;
