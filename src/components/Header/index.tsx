import styles from '../Header/styles.module.scss'
import { SignInButton } from '../SignInButton'
import Link from 'next/link'
import { ActiveLink } from '../ActiveLink'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName="styles.active" href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName="styles.active" href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}
