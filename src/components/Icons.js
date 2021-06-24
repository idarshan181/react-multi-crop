import React from 'react';
import PropTypes from 'prop-types';

export const DeleteIcon = props => (
  <div className="rmc-icon-container"{...props}>
    <div className="rmc-remove" />
    <style jsx="true">{`
      .rmc-icon-container {
        width: 15px;
        height: 15px;
        cursor: pointer;
        float: right;
        background:#262626;
        opacity: 0.8;
        margin-right:-15px;
      }
      .rmc-remove {
        color: white;
        position: absolute;
        margin-top: 6px;
      }

      .rmc-remove:hover {
        cursor: pointer;
      }

      .rmc-remove:before {
        content: '';
        position: absolute;
        width: 15px;
        height: 1px;
        background-color: currentColor;
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
      }

      .rmc-remove:after {
        content: '';
        position: absolute;
        width: 15px;
        height: 1px;
        background-color: currentColor;
        -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
      }
    `}
    </style>
  </div>
);

export const LabelIcon = ({ label }) => (
  <div className="rmc_label">
    {label}
    <style jsx="true">{`
      .rmc_label {
        width: 15px;
        height: 15px;
        float: left;
        color:pink;
        position: absoulte;
        margin-left:-15px;
        font-size: 12px;
        background:#262626;
        text-align: center;
        line-height: 15px;
        color: white;
        opacity: 0.8;
      }

    `}
    </style>
  </div>
);

LabelIcon.propTypes = {
  label: PropTypes.any
}

LabelIcon.defaultProps = {
  label: 'Q',
}
