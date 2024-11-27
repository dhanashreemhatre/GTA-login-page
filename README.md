# Login Interface

This is a React component that renders a login interface with a card-style layout and input fields for username and password.

## Features

- Responsive and centered layout using Tailwind CSS utility classes
- Customizable Card, Input, and Button components
- Displays error state for password input
- Includes a "I don't have an account" message at the bottom

## Usage

To use this component, simply import it into your React application:

```jsx
import LoginInterface from './LoginInterface';

const App = () => {
  return (
    <div>
      <LoginInterface />
    </div>
  );
};
```

## Components

The `LoginInterface` component uses the following custom components:

1. `Card`: A container component that provides a card-style layout.
2. `CardHeader`: The header section of the card.
3. `CardTitle`: The title displayed in the card header.
4. `CardContent`: The content area of the card.
5. `Input`: An input field component with optional icon.
6. `InputLabel`: A label component for input fields.
7. `Button`: A button component.

## Styling

The styling for this component is done using Tailwind CSS utility classes. You can customize the styles by modifying the classes applied to the various components.

## Dependencies

This component uses the `lucide-react` library for the lock icon. Make sure to install the library before using the component:

```
npm install lucide-react
```

## License

This project is licensed under the [MIT License](LICENSE).