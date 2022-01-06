import clsx from "clsx";
import Link from "next/link"
import styles from './Button.module.scss';

interface ButtonProps {
  href: string,
  text: string,
  className?: string,
}

const Button = (props: ButtonProps) => {
  return <Link href={props.href}><a className={clsx(styles.button, props.className)}>{props.text}</a></Link>
}

export default Button
