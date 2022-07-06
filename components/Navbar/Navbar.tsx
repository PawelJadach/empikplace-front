import clsx from "clsx";
import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router";
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
          <NavLink href="/blog" text="Blog   " />
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
  const router = useRouter();
  const activePath = router.pathname;

  return <Link href={props.href}><a className={clsx(styles.item, activePath === props.href && styles.itemActive)}>{props.text}</a></Link>;
}

export default Navbar
