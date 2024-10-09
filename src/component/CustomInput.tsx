import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

const CustomInput = forwardRef<{ focus: () => void }, CustomInputProps>(
  ({ children, ...inputProps }, ref) => {
    const childInputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus() {
        childInputRef.current?.focus();
      },
    }));

    return (
      <>
        <input ref={childInputRef} {...inputProps} />
        {children}
      </>
    );
  }
);

export default CustomInput;
