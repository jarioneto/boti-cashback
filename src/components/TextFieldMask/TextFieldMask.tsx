/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// Third party
import MaskedInput from 'react-text-mask';

const TextFieldMask: React.FC = ({ inputRef, mask, ...textFieldMaskprops }: any) => {
  return (
    <MaskedInput
      {...textFieldMaskprops}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask}
      placeholderChar={'\u2000'}
    />
  );
};

export default TextFieldMask;
