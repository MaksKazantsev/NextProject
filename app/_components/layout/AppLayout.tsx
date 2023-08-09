import {ReactNode} from "react";
import styles from './layout.module.scss'
export const AppLayout = ({children} : {children : ReactNode}) => {
	return (
		<main className={styles.mainContainer}>
            {children}
        </main>
	)
}