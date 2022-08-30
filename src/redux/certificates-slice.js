import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    certificatesList: [{сommonName:' Іванов Іван Іванович'},{сommonName:'Сидоров Сидор Іванович'}, {сommonName:' Богданов Богдан Іванович'}]
}
// 
const CertificateSlice = createSlice({
    name: 'certificates',
    initialState,
    reducers: {
       addCertificate:(state, { payload })=>{
        state.certificatesList=[...state.certificatesList, payload]
        // state.certificates.certificatesList.push(payload)
       }
    }
})
export const {addCertificate} = CertificateSlice.actions
export default CertificateSlice.reducer 