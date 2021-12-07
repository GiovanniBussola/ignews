import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a monorepo with learn & Yarn workspaces</strong>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae iste quaerat quod, non eaque, fugiat aperiam vitae maiores</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a monorepo with learn & Yarn workspaces</strong>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae iste quaerat quod, non eaque, fugiat aperiam vitae maiores</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a monorepo with learn & Yarn workspaces</strong>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae iste quaerat quod, non eaque, fugiat aperiam vitae maiores</p>
                    </a>
                </div>
            </main>

        </>
    )
}