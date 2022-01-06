import clsx from "clsx";
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import Button from "../Button/Button";
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href='/'>
            <a>
                <Image objectFit="cover" objectPosition="-55px" layout="fill" src="https://media.empik.com/content/empik-place/main/logo.png"/>
            </a>
          </Link>
        </div>
        <button className={clsx(styles.hamburger, isOpen && styles.hamburgerOpen)} onClick={toggleIsOpen}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={clsx(styles.menu, isOpen && styles.open)}>
          <NavLink href="/premium" text="Premium" />
          <NavLink href="/dlaczego-warto" text="Dlaczego warto" />
          <NavLink href="/pomoc" text="Pomoc" />
          <NavLink href="/integracje" text="Integracje" />
          <Button className={styles.button} href="https://www.empik.com/marketplace-wniosek" text="Zostań sprzedawcą" />
        </div>
      </div>
    </nav>
  )
}


interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink = (props: NavLinkProps) => {
  return <Link href={props.href}><a className={styles.item}>{props.text}</a></Link>;
}

export default Navbar
