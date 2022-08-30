import { MainContainer } from './MainContainer/MainContainer';
import { useDispatch, useSelector } from 'react-redux';
import style from './App.module.css';
import cer from '../components/Tellipse.cer';
import { addCertificate } from 'redux/certificates-slice';
import { CertificateList } from './CertificateList/CertificateList';
import { getCertificates } from 'redux/certificates-selectors';
import Hex from '@lapo/asn1js/hex';
import { useState } from 'react';
const ASN1 = require('@lapo/asn1js');

//------------------------------------

export const App = () => {
  const [final, setFinal]=useState(null)
  const dispatch = useDispatch();

  function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  const onDrop = e => {
    e.stopPropagation();
    e.preventDefault();
    // let final;
    const files = e.dataTransfer.files
    
    let reader = new FileReader();
console.log(files);
    reader.onload = (event) => {console.log(event.target.result)}
    
    // console.log(reader.onload(e));

    const res = reader.readAsDataURL(files[0]);//!!!!!!!!!!!!!!!!оставить
    
  
  //  const result= reader.readAsDataURL(files[0]);
  
console.log(res.split("base64,"));

// console.log(decodeURIComponent(atob(final.split("base64,")[1])));

    // dispatch(addCertificate(files))
    // const result = ASN1.decode(dd);
    // if (result.typeName(result) !== 'SEQUENCE') {
    //   // eslint-disable-next-line no-throw-literal
    //   throw 'Неправильна структура конверта сертифіката (очікується SEQUENCE)';
    // }
    // console.log(result);
    // console.log(result);
  };

  return (
    <>
      <MainContainer>
        <CertificateList />
        <input
          style={{ width: '200px', height: '150px', backgroundColor: 'gray' }}
          type="file"
          onDrop={onDrop}
          // onChange={(e)=> console.log(e)}
        />
      </MainContainer>
      {/* <div
        style={{ width: '200px', height: '150px', backgroundColor: 'gray' }}
        type="file"
        dragenter={dragenter}
        dragover={dragover}
        // onDrop={drop}
      >111111</div> */}
    </>
  );
};

//
