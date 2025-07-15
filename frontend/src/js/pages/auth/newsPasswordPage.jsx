import React from 'react'
import ButtonText from '../../components/button/buttonText.jsx'
import InputText from '../../components/input/inputText.jsx'
import StepIndicator from '../../components/random/stepIndicator.jsx'
import InputCode from '../../components/input/inputCode.jsx'
import { FaLock } from 'react-icons/fa'
import '../../../css/forgotAuth.css'

const Verification= ({email}) => {
  return (
    <div className='forgotPassword'>
        <div className="forgotForm">
            <div className='forgotLabel'>
                <h2>Lupa Sandi</h2>
                <StepIndicator currentStep={3}/>
            </div>
            <span><FaLock/></span>
            <label className='descriptionLabel'>Buat kata sandi baru untuk akun anda</label>
            <div className='inputContainer'>
                <label>Kata sandi baru</label>
                <InputText 
                type='password'
                placeholder='Masukan kata sandi baru'
                />
                <label>Konfirmasi kata sandi baru</label>
                <InputText
                type='password'
                placeholder='konfirmasi kata sandi baru'/>
            </div>
            <button className="sendButton">Verifikasi code</button>
            <p><ButtonText link="/verification" label="Kembali ke halaman sebelumnya"/></p>
        </div>
    </div>
  )
}

export default Verification