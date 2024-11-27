import React from 'react';

const Card = ({ className, children }) => {
  return <div className={`bg-gray-800 rounded-lg shadow-md ${className}`}>{children}</div>;
};

const CardHeader = ({ children }) => {
  return <div className="px-6 py-4 border-b bg-indigo-800 border-gray-700">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h2 className="text-2xl font-bold text-white text-center">{children}</h2>;
};

const CardContent = ({ children }) => {
  return <div className="px-6 py-4">{children}</div>;
};

const Input = ({ id, type, placeholder, icon, ...props }) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        className="w-full bg-gray-700 border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        {...props}
      />
      {icon && <div className="absolute inset-y-0 right-0 pr-3 flex items-center">{icon}</div>}
    </div>
  );
};

const InputLabel = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block text-gray-400 font-medium mb-1">
      {children}
    </label>
  );
};

const Button = ({ type, className, children }) => {
  return (
    <button
      type={type}
      className={`bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      {children}
    </button>
  );
};

const LoginInterface = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Charwinski Roleplay</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="mb-4">
            <InputLabel htmlFor="username">UserId</InputLabel>
            <Input
              id="username"
              type="text"
              placeholder="Remover"
              icon={<div className="text-gray-400">@</div>}
            />
          </div>
          <div className="mb-6">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              placeholder="Incorrect password!"
              icon={<div className="text-red-500">🔒</div>}
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <div className="text-center text-gray-500 mt-4">Forgot password?</div>
      </CardContent>
    </Card>
  );
};

export default LoginInterface;