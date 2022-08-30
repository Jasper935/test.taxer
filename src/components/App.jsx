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
    let reader = new FileReader();
    // const files = e.dataTransfer.files;
    reader.onload = e => {
      console.log(e.target.result)
      if(e.target.result){
      
      setFinal(e.target.result)}
      
    };
    
    // console.log(reader.onload(e));
const dd ='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'
    // const res = reader.readAsDataURL(files[0]);
    // console.log(res);
// console.log(final);
// console.log(final.split("base64,"));

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
