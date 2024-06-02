import Form from '@/components/Form/Form';
import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  return (
    <section>
      <div className={`container ${styles.contactsContainer}`}>
        Contacts
        <Form />
      </div>
    </section>
  );
};

export default ContactsPage;
