import f1logo from '../../images/f1logo.webp'
import styles from './formulaOneLogo.module.css'

export const FormulaOneLogo = () => (
  <picture>
    <source srcSet={f1logo} type='image/webp'/>
    <img src={f1logo.src} className={styles.logo} alt="formula one official logo" />
  </picture>
);
