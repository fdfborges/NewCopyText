import React from 'react'
import './Login.scss';
import { useModalForLogin } from './ContextModalForLogin';
import { useModal } from '../Register/ContextModal'
import LetterIcon from './assets/LetterIcon.svg';
import PasswordIcon from './assets/PasswordIcon.svg'
import { Button } from '../Components/Button/Button';
import AvatarCopy from './assets/AvatarCopy.svg'

export const Login = () => {

    const { isOpenForLogin, setIsOpenForLogin } = useModalForLogin();
    const { isOpen, setIsOpen } = useModal();

    return (
        <>
            {isOpenForLogin && (
                <div onClick={() => setIsOpenForLogin(false)} className="LoginContainerPrincipal">
                    <div onClick={(e) => e.stopPropagation()} className="LoginBackground">
                        <div className='LoginContainerLeft'>
                            <form action="#">
                                <div className="ContainerTitleAndDescription">
                                    <h1>Entre</h1>
                                    <span>Para acessar seus <strong>Copys</strong></span>
                                </div>
                                <div className='LoginFormContainerInput'>
                                    <div className="inputAndIcon"><input placeholder='Email' type="email" /> <img src={LetterIcon} alt="" /></div>
                                    <div className="inputAndIcon"><input placeholder='Senha' type="password" /> <img src={PasswordIcon} alt="" /></div>
                                </div>
                                <Button className="BtnSubmitFormRegiter"
                                    children={"ENTRAR"}
                                    variant="primary"
                                    size="medium"
                                />
                                <span>Não tem uma conta? <a href="#"><strong className='BtnStrongLink' onClick={() => { setIsOpenForLogin(false); setIsOpen(true)}}>Crie Agora</strong></a></span>
                            </form>
                        </div>
                        <div className="LoginContainerRight">
                            <img src={AvatarCopy} alt="" draggable='false'/>
                            <span>Registre-se e leve seus <strong>Copys</strong><br />para onde quiser!</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
