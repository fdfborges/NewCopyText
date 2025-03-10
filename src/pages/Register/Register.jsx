import React from 'react';
import './Register.scss';
import AvatarIcon from './assets/AvatarIcon.svg';
import LetterIcon from './assets/LetterIcon.svg';
import PasswordIcon from './assets/PasswordIcon.svg'
import { Button } from '../Components/Button/Button';
import Carousel from 'react-bootstrap/Carousel';
import ImageOneCarousel from './assets/ImageOneCarousel.svg';









export const Register = () => {


    return (
        <>
            <div className="RegisterContainerPrincipal">
                <div className='RegisterContainerLeft'>
                    <form action="#">
                        <div className="ContainerTitleAndDescription">
                            <h1>Crie sua conta!</h1>
                            <span>Desbloqueie todas as funcionalidades</span>
                        </div>
                        <div className='RegisterFormContainerInput'>
                            <div className='inputAndIcon'><input placeholder='Nome' type="text" /> <img src={AvatarIcon} alt="" /></div>
                            <div className="inputAndIcon"><input placeholder='Sobrenome' type="text" /> <img src={AvatarIcon} alt="" /></div>
                            <div className="inputAndIcon"><input placeholder='Email' type="email" /> <img src={LetterIcon} alt="" /></div>
                            <div className="inputAndIcon"><input placeholder='Senha' type="password" /> <img src={PasswordIcon} alt="" /></div>
                            <div className="inputAndIcon"><input placeholder='Repita a Senha' type="password" /> <img src={PasswordIcon} alt="" /></div>
                        </div>
                        <div className="RegisterFormContainerTerms">
                            <input type="checkbox" />
                            <span className='spanTerms'>Aceite os <a href="#"><strong>termos e condições</strong></a></span>
                        </div>
                        <Button className="BtnSubmitFormRegiter"
                            children={"LOG IN"}
                            variant="primary"
                            size="medium"
                        />
                        <span>Já tem uma conta? <a href="#"><strong>Entre agora!</strong></a></span>
                    </form>
                </div>
                <div className="RegisterContainerRight"></div>

            </div>
        </>
    )
}
