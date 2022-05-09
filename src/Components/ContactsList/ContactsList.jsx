import React from "react";
import PropTypes from "prop-types";
import s from "./ContactsList.module.css";
import Contact from "./Contact";

function ContactsList({ list, onClick }) {
  return (
    <ul className={s.ContactList}>
      {list.map(({ name, number, id }, idx) => (
        <Contact
          key={id}
          idx={idx}
          name={name}
          number={number}
          onClick={() => {
            onClick(id);
          }}
        />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactsList;
