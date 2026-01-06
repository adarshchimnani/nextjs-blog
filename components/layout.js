import styles from './layout.module.css';

export default function Layout({children}){
    return <div className={styles.container}>
        {children}
        <h1>This is Layout Component</h1>
    </div>;
}