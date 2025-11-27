import { assets } from '../../assets/assets'
import './LoginPopup.css'
import React, {useState} from 'react'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Cadastrar")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Entrar"?<></>:<input type="text" placeholder='Nome' required />}
                <input type="email" placeholder='Email' required />
                <input type="password" placeholder='Senha' required />
            </div>
            <button>{currState==="Cadastrar"?"Criar conta":"Entrar"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>Ao continuar, eu concordo com os termos de uso & política de privacidade.</p>
            </div>
            {currState==="Entrar"
            ?<p>Criar uma nova conta? <span onClick={()=>setCurrState("Cadastrar")}>Clique aqui</span></p>
            :<p>Já tem uma conta? <span onClick={()=>setCurrState("Entrar")}>Entre aqui</span></p>
            }            
        </form>
    </div>
  )
}

export default LoginPopup