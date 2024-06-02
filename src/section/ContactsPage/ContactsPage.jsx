import Form from '@/components/Form/Form';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  return (
    <section>
      <div className={`container ${styles.contactsContainer}`}>
        <div className={styles.contact}>
          <h1 className={styles.title}>Контакти</h1>
          <h3 className={styles.subTitle}>
            <span className="accentText">Зв&rsquo;яжіться зі мною</span>, я
            завжди готовий до нових проектів та співпраці.
          </h3>
          <ul className={styles.contactList}>
            <li>
              <a href="tel:+380966058605" className={styles.contactLink}>
                <p>+38 (096) 605 86 05</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:inbox.webevery@gmail.com"
                className={styles.contactLink}
              >
                <p>inbox.webevery@gmail.com</p>
              </a>
            </li>
            <li>
              <p className="accentText">м. Київ, вул. Фотографів, 12</p>
            </li>
          </ul>
          <SocialLinks socialList={styles.socialList} />
        </div>
        <Form />
      </div>
    </section>
  );
};

export default ContactsPage;
