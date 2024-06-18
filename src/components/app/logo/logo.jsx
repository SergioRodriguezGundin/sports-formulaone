import f1logo from '../../../assets/f1logo.webp'
import styles from './logo.module.css'

export const Logo = () => (
  <picture>
    <source srcSet={f1logo} type='image/webp'/>
    <img src={f1logo.src} className={styles.logo} alt="formula one official logo" />
  </picture>
);
