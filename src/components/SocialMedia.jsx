import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div style={{cursor: 'pointer'}}>
      <BsTwitter />
    </div>
    <div style={{cursor: 'pointer'}}>
      <FaFacebookF />
    </div>
    <div style={{cursor: 'pointer'}}>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;