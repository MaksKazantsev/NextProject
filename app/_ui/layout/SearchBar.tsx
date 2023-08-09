'use client'
import {AiOutlineSearch} from "react-icons/ai";
import styles from '@/app/_ui/_styles/searchbar.module.scss'
import {useRouter} from "next/navigation";
import {FormEvent, MutableRefObject, useRef} from "react";

export const SearchBar = () => {
    const router = useRouter()
    const input = useRef() as MutableRefObject<HTMLInputElement>
    const handleSearch = (e : FormEvent) => {
        e.preventDefault()
        router.push(`/${input.current.value}`)
    }

	return (
		<form className={styles.searchbarContainer} onSubmit={handleSearch}>
            <input type="text" ref={input}/>
            <button><AiOutlineSearch/></button>
        </form>
	)
}