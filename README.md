# useImperativeHandle()

When manipulating a child components `DOM element` with `Ref` and `forwardRefs`, you
can limit what methods or functions of the child component to expose to the parent
using `useImperativeHandle`

```javascript
useImperativeHandle(ref, () => ({
  scrollIntoView() {
    thisComponentRef.current.scrollIntoView();
  },
}));
```

## Project Example

This project contains a `CustomInput component`

- `CustomInput`: An custom input component that allows its parent component to manuinplate`(focus it input element)` its `<input /> element`
  by opting-in with `forwardRefs`

```javascript
interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
 children?: ReactNode
}

const CustomInput = forwardRef<{focus: ()=>void}, CustomInputProps> (({children, ...inputProps}, ref) => {
 const childInputRef = useRef<HTMLInputElement>(null)

 useImperativeHandle(ref,()=>({
   focus(){
     childInputRef.current?.focus()
   }
 }))

 return (
   <>
     <input
       ref={childInputRef}
       {...inputProps}
     />
     {children}
 </>
 );
});

export default CustomInput;
```

The `useImperativeHandler` in this component exposes only the `focus()` function of the component to its parent component,
limiting which children functions of the `CustomInput` the parent can manipulate
