import React from 'react';
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import './CustomArrows.css';

const PrevArrow = ({ onClick, disabled }) => {
  return (
    <FaCaretLeft
      className={`custom-arrow prev-arrow ${disabled ? 'disabled' : ''}`}
      onClick={disabled ? null : onClick}
    />
  );
};

const NextArrow = ({ onClick, disabled }) => {
  return (
    <FaCaretRight
      className={`custom-arrow next-arrow ${disabled ? 'disabled' : ''}`}
      onClick={disabled ? null : onClick}
    />
  );
};

export { PrevArrow, NextArrow };
