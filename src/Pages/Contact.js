import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import nb1 from '../assets/img/nav-icon1.svg';
import nb2 from '../assets/img/github.svg';
import nb3 from '../assets/img/nav-icon3.svg';
import { FiSend } from "react-icons/fi";
import { useTranslation } from 'react-i18next';


export const Contact = () => {
  const { t, i18n } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sr3yyuh', 'template_17fu5us', form.current, 'IkTh80xKiikeJ0310')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="container" id="contact" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '70px', justifyContent: 'center', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ width: '100%', height: '100px', marginBottom: '20px' }}>
        <h2 className='form-title' style={{ textAlign: 'center' }}>{t('getContact')}</h2>
      </div>
      <div className="row" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
        <div className='col-lg-6' style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <a href="https://www.linkedin.com/in/iremsrl/" className='social-icon-a' style={{ margin: '0 10px' }}>
              <img className='social-icon' src={nb1} alt="LinkedIn" />
            </a>
            <a href="https://github.com/iremSaral" className='social-icon-a' style={{ margin: '0 10px' }}>
              <img className='social-icon' src={nb2} alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/irem_srll" className='social-icon-a' style={{ margin: '0 10px' }}>
              <img className='social-icon' src={nb3} alt="Instagram" />
            </a>
          </div>
          <p style={{ color: '#82878D', textAlign: 'center', fontSize: '18px' }}>
            {t('contact_p')}
          </p>
        </div>
        <div className="col-lg-6">
          <form ref={form} onSubmit={sendEmail} className='form'>
            <div className="row row-rows-4">
              <div className="mb-3">
                <label className="form-label">{t('name')}</label>
                <input type="text" className="form-control" name='user_name' />
              </div>
              <div className="mb-3">
                <label className="form-label">{t('email')}</label>
                <input type="email" className="form-control" name="user_email" />
                <div id="emailHelp" className="form-text" style={{ color: '#82878D' }}>{t('contact_w')}</div>
              </div>
              <div className="mb-3">
                <label className="form-label">{t('mess')}</label>
                <textarea name="message" className='form-control' />
                <button type="submit" className='form-btn' style={{ color: '#fff', marginTop: '10px', width: '90%' }}>
                  {t('send')} <FiSend style={{ marginLeft: '5px' }} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}  