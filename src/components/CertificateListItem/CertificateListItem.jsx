import style from './CertificateListItem.module.css';
import { getCertificates } from 'redux/certificates-selectors';
import { useSelector } from 'react-redux';

export const CertificateListItem = () => {
  const certificates = useSelector(getCertificates);
  // console.log(certificates);




  return (certificates.map((el, i) => (
    <li key={i} className={style.certificateListItem}>
      <p>{el.сommonName}</p>
    </li>
  )))
};
