import styles from './conteinar.module.css'

const Container = ({children})=>{
    return(
        <div className={styles.div}>
            {children}
        </div>
    )
}

export default Container