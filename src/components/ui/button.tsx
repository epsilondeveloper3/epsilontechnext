import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95',
                    {
                        'bg-primary text-white hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-200': variant === 'primary',
                        'bg-secondary text-white hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-100': variant === 'secondary',
                        'bg-accent text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-100': variant === 'accent',
                        'border-2 border-slate-200 bg-transparent text-slate-700 hover:border-primary hover:text-primary': variant === 'outline',
                        'bg-transparent text-slate-600 hover:bg-slate-100': variant === 'ghost',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-6 text-base': size === 'md',
                        'h-14 px-8 text-lg': size === 'lg',
                        'h-16 px-10 text-xl font-bold': size === 'xl',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button };
