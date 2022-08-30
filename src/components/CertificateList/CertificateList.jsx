import style from '../CertificateList/certificateList.module.css'
import { CertificateListItem } from 'components/CertificateListItem/CertificateListItem'
import { getCertificates } from 'redux/certificates-selectors';
import { useSelector } from 'react-redux';
export const CertificateList=()=>{
    const certificates = useSelector(getCertificates);
    // console.log(certificates);
return (
    <ul className={style.certificateList}>
        <CertificateListItem/>
    </ul>
)


}