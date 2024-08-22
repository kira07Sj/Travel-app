import Image from 'next/image'; // or the correct import path for your Image component

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string; // Adjust or extend this as needed
  full?: boolean
};

const Button = ({ title, type, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full 
        border ${variant} ${full && 'w-full'}`}
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
