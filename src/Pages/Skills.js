import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Skilss.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import nb1 from '../assets/img/github.svg'
import nb2 from '../assets/img/react.svg'
import ts from '../assets/img/typeScript.svg';
import js from '../assets/img/javaScript.svg';
import msql from '../assets/img/mySql.svg';
import fb from '../assets/img/firebase.svg';
import arduino from '../assets/img/arduino.svg';
import canva from '../assets/img/canva.svg';
import { useTranslation } from 'react-i18next';

import { CircularBar } from '../comp/CircularBar';
export const Skills = () => {

  const {t,i18n} =useTranslation();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section id='skills' >
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>{t('skills')} </h2>
              <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                <div className='item'>
                  <CircularBar percentage={100} circleWidth='100' imagesrc={nb1}></CircularBar>
                  <h5>{t('git')}</h5>
                </div>
                <div className='item'>
                  <CircularBar percentage={100} circleWidth='100' imagesrc={nb2}></CircularBar>
                  <h5>{t('react')}</h5>
                </div>
                <div className='item'>
                  <CircularBar percentage={100} circleWidth='100' imagesrc={ts}></CircularBar>
                  <h5>{t('ts')}</h5>
                </div>
                <div className='item'>
                  <CircularBar percentage={100} circleWidth='100' imagesrc={js}></CircularBar>
                  <h5>{t('js')}</h5>
                </div>
                <div className='item'>
                  <CircularBar percentage={100} circleWidth='100' imagesrc={msql}></CircularBar>
                  <h5>{t('mysql')}</h5>
                </div>
                <div className='item'>
                  <CircularBar percentage={100} circleWidth='100' imagesrc={fb}></CircularBar>
                  <h5>{t('fb')}</h5>
                </div>
                <div className='item'>
                  <CircularBar percentage={100} circleWidth='100' imagesrc={arduino}></CircularBar>
                  <h5>{t('c')}</h5>
                </div>
                <div className='item'>
                  <CircularBar percentage={100} circleWidth='100' imagesrc={canva}></CircularBar>
                  <h5>{t('canva')}</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>

      </Container>

    </section>
  )
}
