import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link legacyBehavior href="/">
        <a className={router.pathname === "/" ? "active" : null}>Home</a>
      </Link>
      <span> | </span>
      <Link legacyBehavior href="/about">
        <a className={router.pathname === "/about" ? "active" : null}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }

        a {
          text-decoration: none;
          color: tomato;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
