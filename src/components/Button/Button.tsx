import type { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx"

type Props = ComponentProps<'button'> & {
    variant ?: 'solid' | 'outlined';
    color ?: 'default' | 'primary';
}
export default function Button({
    variant = "solid",
    color = "default",
    children,
    className,
    ...otherProps
}:Props):ReactNode{
    
    return(
        <button className={clsx(styles.button , styles[variant],
            styles[color], className)} {...otherProps}>
                {children}
            </button>
    );
}