import { cn } from "../../lib/utils";

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export function Logo({className, size }: LogoProps) {

  const sizeClasses = {
    small: 'w-14',
    medium: 'w-20',
    large: 'w-28',
  }

  return (
    <div className={cn('flex items-center', className, sizeClasses[size || 'small'])}>
      <img src="/images/logo-big.png" alt="Logo do IF"/>
    </div>
  )
}