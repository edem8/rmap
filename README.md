## Render props

Think of a render prop as...wait no it is actually a prop component
whose prop value is a function that returns some JSX. This way the component in itself
becomes resuable in the sense that it all it renders is the prop passed.

```javascript

  interface CardTitleProp{
    render: (title: string)=>React.ReactNode
  }
  const CardTitle: React.FC<CardTitleProp> = (props)=>props.render();

  export default CardTitle
```

Using the CardTitle component

```javascript
<CardTitle render={() => <h1>This is a render prop</h1>} />
```

## Project Example

This project consists of three main components:

- `Input`: A component that handles user input for the temperature.
- `Kelvin`: A component that displays the temperature in Kelvin.
- `Fahrenheit`: A component that displays the temperature in Fahrenheit.

### lifting state

`kelvin` and `Fahrenheit` components need the input value from the `Input` component (parent compnent) to calculate their temperature values

```javascript
import React, { useState } from "react";

const Input: React.FC<{ render: (value: number) => React.ReactNode }> = (props) => {
    const [value, setValue] = useState<number>(10);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <div>
            <input
                type="number"
                value={value}
                onChange={handleChange}
                placeholder="Temp in degrees"
            />
            {props.render(value)} //passes value data to the children in the JSX prop
        </div>
    );
};

export default Input;
```

### Rendering the component

```javascript
<Input
    render={(value: number) => (
        <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
        </>
    )}
/>

```

Input component rendered with children through a render prop

## Why render props

Checkout this example

```javascript
    const App: React.FC = ()=>{
        const [value, setValue] = useState<number>(10)

        return (
            <div>
            <Input setValue={setValue} /> // sets the value
            <Kelvin  value={value} />    // uses the value to calc kelvin value
            <Fahrenheit value={value}/> // uses the value to calc fahrenheit value

            <AnotherComponent /> // unretaled component
            </div>
    )}
```

In the exmple above when the `App` re-renders based of vlaue changes `AnotherComponent` may re-render uneccessarily. Using render props helps manage this by allowing specific components to update without triggering re-renders of unrelated components.
