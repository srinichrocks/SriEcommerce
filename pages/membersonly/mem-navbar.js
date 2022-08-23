import styles from '../../styles/navbar.module.css'
import Link from 'next/Link'
export default function MemNavbar() {
    return(
        <section className={styles.grad}>
            <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark py-4">
                <Link href="/"><a className="navbar-brand">Sri's Vintage</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <Link href="/"><a className="nav-item nav-link text-white">Home</a></Link>
                    <Link href="/clothes/shirts"><a className="nav-item nav-link text-white">Shirts</a></Link>
                    <Link href="/clothes/pants"><a className="nav-item nav-link text-white">Pants</a></Link>
                    <Link href="/clothes/jackets"><a className="nav-item nav-link text-white">Jackets</a></Link>
                    <Link href="/api/auth/logout"><a className="nav-item nav-link text-white">Logout⟲</a></Link>
                    </div>
                </div>
            </nav>
        </div>
    </section>
    )
}