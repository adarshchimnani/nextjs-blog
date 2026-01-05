import Link from "next/link";
import Layout from "../../layout";
import Head from "next/head";

export default function FirstPost() {
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h2>
            <Link href='/'>Back to home</Link>
        </h2 >
    </Layout>
}