import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";

export default function FirstPost() {
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h2>
            <Link href='/'>Back to home</Link>
        </h2 >
        <h3>This is second post.</h3>
        <h4>This is third post.</h4>
    </Layout>
}