import Image from 'next/image'; // or the correct import path for your Image component

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string; // Adjust or extend this as needed
};

const Button = ({ title, type, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full 
        border ${variant}`}
    >
      {icon && (
        <Image
          src={icon}
          width={24}
          alt={title}
          height={24}
        />
      )}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
