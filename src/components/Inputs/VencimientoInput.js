import React from "react";
import MaskedInput from "react-text-mask";

function VenceMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[0-1]/, /[0-9]/, "/", /[0-9]/, /[0-9]/]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

export default VenceMask;
