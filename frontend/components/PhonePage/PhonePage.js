import React, { Component } from 'react';
import SVGInline from 'react-svg-inline';

import Phone from './Phone.svg';
import PhonePageStyleWrapper from './PhonePage.style';


class PhonePage extends Component {
  componentDidMount() {
    const svgDoc = document.getElementById('ISO');
    svgDoc.addEventListener('load', this.onComponentLoad(svgDoc));
  }

  componentWillUnmount() {
    const svgDoc = document.getElementById('ISO');
    svgDoc.removeEventListener('load', this.onComponentLoad(svgDoc));
    const contactButton = svgDoc.getElementById('contact_button');

  }

  onComponentLoad(svgDoc) {
    const contactButton = svgDoc.getElementById('contact_button');
    // contact button click function
    contactButton.addEventListener('click', this.onContactClick);
    //     // On mouse over make phone transparent
    contactButton.addEventListener('mouseover', event => this.contactOver(svgDoc));
    // on mouse out reset transparency
    contactButton.addEventListener('mouseout', event => this.contactOut(svgDoc));
  }

  contactOver = (svgDoc) => {
    svgDoc.childNodes.forEach((node) => {
      if (node.id !== 'contact_button')
        node.style.opacity = '0.5';
    });
  }

  contactOut = (svgDoc) => {
    svgDoc.childNodes.forEach((node) => {
      node.style.opacity = '1';
    });
  }

  onContactClick = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: window.innerHeight - 20,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <PhonePageStyleWrapper className="phone-page">
        <div className="phone-page-header">
          <h1 className="phone-page-name">
            KYLE MURPHY
          </h1>
          <h2 className="phone-page-title">
            Fullstack Developer
          </h2>
        </div>
        <SVGInline className="phone-page-svg" svg={Phone}/>

      </PhonePageStyleWrapper>
    );
  }
}

export default PhonePage;
