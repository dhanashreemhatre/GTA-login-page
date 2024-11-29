import React from 'react';

const Card = ({ className, children }) => {
  return (
    <div 
      className={`
        bg-black bg-opacity-30 
        backdrop-blur-lg 
        border border-gray-800 border-opacity-50 
        rounded-2xl 
        shadow-2xl 
        overflow-hidden 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return (
    <div 
      className="
        px-6 
        py-4 
        bg-black 
        bg-opacity-20 
        border-b 
        border-gray-800 
        border-opacity-30
      "
    >
      {children}
    </div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h2 
      className="
        text-2xl 
        font-bold 
        text-gray-200 
        text-center 
      "
    >
      {children}
    </h2>
  );
};

const CardContent = ({ children }) => {
  return (
    <div className="
      px-6 
      py-4 
      bg-black 
      bg-opacity-10
    ">
      {children}
    </div>
  );
};

const Input = ({ id, type, placeholder, icon, ...props }) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        className="
          w-full 
          bg-gray-900 
          bg-opacity-50 
          backdrop-blur-md 
          border 
          border-gray-800 
          border-opacity-50 
          rounded-xl 
          px-4 
          py-2 
          text-gray-200 
          placeholder-gray-500 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-700
        "
        placeholder={placeholder}
        {...props}
      />
      {icon && (
        <div 
          className="
            absolute 
            inset-y-0 
            right-0 
            pr-3 
            flex 
            items-center
          "
        >
          {icon}
        </div>
      )}
    </div>
  );
};

const InputLabel = ({ htmlFor, children }) => {
  return (
    <label 
      htmlFor={htmlFor} 
      className="
        block 
        text-gray-300 
        font-medium 
        mb-1 
      "
    >
      {children}
    </label>
  );
};

const Button = ({ type, className, children }) => {
  return (
    <button
      type={type}
      className={`
        bg-black/90
        bg-opacity-60 
        backdrop-blur-md 
        text-gray-200 
        font-medium 
        py-2 
        px-4 
        rounded-xl 
        hover:bg-opacity-70 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-700 
        transition-all 
        duration-300 
        ${className}
      `}
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
          <div 
            className="
              text-center 
              text-gray-400 
              mt-4 
        
            "
          >
            Forgot password?
          </div>
        </CardContent>
      </Card>
  );
};

export default LoginInterface;