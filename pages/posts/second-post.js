import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";

export default function SecondPost() {
    <Layout>
        <Head>
            <title>Second Post</title>
        </Head>
        <h2>
            <Link href='/'>Back to home</Link>
        </h2 >
        <h3>This is second post.</h3>
        <h4>This is third post.</h4>
        <h5>This is the second post in H5 element.</h5>
        <h6>This is the second post in H6 element.</h6>
    </Layout>
}