import React from "react";

const FormOrdenes = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='field'>
        <input type='text' />
      </div>
    </form>
  );
};

export default FormOrdenes;
