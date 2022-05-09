import React from "react";
import PropTypes from "prop-types";
import s from "./Contact.module.css";
import Button from "../../Button";

function Contact({ name, number, idx, onClick }) {
  return (
    <li className={s.Contact}>
      <p>
        {idx + 1} - {name}: {number}
      </p>
      <Button onClick={onClick} text="Delete" type="button" />
    </li>
  );
}

export default Contact;

Contact.propTypes = {
  options: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    idx: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};
