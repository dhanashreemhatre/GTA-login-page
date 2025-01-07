import React, { useState } from 'react';

const AlertMessage = ({ message, type = "info", onClose }) => {
  const alertStyles = {
    info: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-white",
  };

  return (
    <div
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2
        px-4 py-3 rounded-lg shadow-lg
        flex items-center justify-between
        ${alertStyles[type]}
      `}
    >
      <span>{message}</span>
      <button
        className="ml-4 text-lg font-bold hover:opacity-70"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
};


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
        backdrop-blur-sm
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

const Button = ({ type, className, children, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-black/95 
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
  const [view, setView] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000); // Auto-hide after 3 seconds
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      showAlert("Please fill in all fields!", "error");
      return;
    }

    // Emit login event
    showAlert("Logging in...", "success");
    window.alt?.emit("Auth.Login", username, password);
  };

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      showAlert("Please enter your email!", "error");
      return;
    }

    // Emit reset password event
    showAlert("Password reset link sent!", "success");
    window.alt?.emit("Auth.ResetPassword", email);
  };

  const renderLogin = () => (
    <>
      <div className="mb-4">
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon={<div className="text-gray-400">@</div>}
        />
      </div>
      <div className="mb-6">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<div className="text-red-500">🔒</div>}
        />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
      <div
        className="text-center text-gray-400 mt-4 cursor-pointer hover:text-gray-200"
        onClick={() => setView("forgotPassword")}
      >
        Forgot password?
      </div>
    </>
  );

  const renderForgotPassword = () => (
    <>
      <div className="mb-4">
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<div className="text-gray-400">✉️</div>}
        />
      </div>
      <Button type="submit" className="w-full mb-4">
        Reset Password
      </Button>
      <div
        className="text-center text-gray-400 cursor-pointer hover:text-gray-200"
        onClick={() => setView("login")}
      >
        Back to Login
      </div>
    </>
  );

  return (
    <>
      {alert && (
        <AlertMessage
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>
            {view === "login" ? "Charwinski Roleplay" : "Forgot Password"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={view === "login" ? handleLoginSubmit : handleResetPasswordSubmit}>
            {view === "login" ? renderLogin() : renderForgotPassword()}
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginInterface;


