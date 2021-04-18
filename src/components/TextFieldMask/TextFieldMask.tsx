/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
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
