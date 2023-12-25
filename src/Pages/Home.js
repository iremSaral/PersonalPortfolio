import React, { useEffect, useRef } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import '../App.css';
import './Image.css';
import './Image.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import { AiOutlineDownload } from "react-icons/ai";


export const Home = ({ timeline, ease }) => {
  const {t,i18n} =useTranslation()

  let h1 = useRef(null);
  let ptext = useRef(null);
  useEffect(() => {
    timeline.from([h1, ptext], 1.2, {
      opacity: 0,
      y: 1200,
      ease: ease,
      skewY: 10,
      stagger: {
        amount: .4
      },
    }, "-=1")
  })

  return (
    <div style={{ marginTop: '0px' }} id='home'>
      <Container className='px-4 my-5' style={{ justifyContent: 'center', padding: '10px' }}>
        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Col sm={7} style={{ width: '450px' }}>
            <div className='images-box1'></div>
          </Col>
          <Col sm={5} style={{ justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center', color: '#A04053' }} ref={el => h1 = el}>{t('about')}</h1>
            <div ref={el => ptext = el}>  
            <h5>{t('hi')}</h5>
      <p>{t('home_p1')} </p>
      <p>{t('home_p2')}</p>
      <ul>
        <li>{ t('home_li1')}</li>
        <li>{ t('home_li2')}</li>
        <li>{ t('home_li3')}</li>
        <li>{ t('home_li4')}</li>
      </ul>
      <p>{t('home_p3')}</p>   
      </div>
            <Row sm={3} style={{display:'flex', justifyContent:'space-around'}}>
              <a className='home-btn' href='#contact' >{t('getContact')} </a>
              <a className='home-btn' style={{backgroundColor:'#A04053'}} href="İrem.pdf" download="iremsaral">  
              <AiOutlineDownload style={{padding:'5px',width:'50px',height:'30px'}}/>
              {t('resume')} </a>

            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}