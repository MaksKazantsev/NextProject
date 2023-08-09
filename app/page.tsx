import {SearchBar} from "@/app/_ui/layout/SearchBar";
import styles from '@/app/_ui/_styles/main.module.scss'
export default function Main() {
    return (
        <section className={styles.main}>
            <SearchBar/>
        </section>
    )
}
