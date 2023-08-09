import {ReactNode} from "react";
import styles from '@/app/_ui/_styles/layout.module.scss'
export const AppLayout = ({children} : {children : ReactNode}) => {
	return (
		<main className={styles.container}>
            {children}
        </main>
	)
}