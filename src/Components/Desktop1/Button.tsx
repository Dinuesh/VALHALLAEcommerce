import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'secondary';

interface ButtonProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    variant?: ButtonVariant;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    icon,
    variant = 'primary',
    onClick
}) => {
    const baseStyles = `
    flex items-center justify-center gap-2
    px-4 py-2 sm:px-6 sm:py-3
    text-sm sm:text-base
    font-medium rounded-md
    transition-all duration-300 transform
    hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-offset-2
    w-full sm:w-auto
  `;

    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white",
        secondary: "bg-blue-800 text-white hover:bg-blue-900 focus:ring-blue-700"
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]}`}
            onClick={onClick}
            type="button"
        >
            {icon && <span className="flex-shrink-0">{icon}</span>}
            <span>{children}</span>
        </button>
    );
};

export default Button;
