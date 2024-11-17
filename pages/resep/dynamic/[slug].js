import useTokenMiddleware from "../../../hooks/useTokenMiddleware";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import RecipePage from "../../../components/resepDetail";
import Footer from "../../../components/footer";

const Home =(
    {recipeId}
) => {
    // useTokenMiddleware()
    return (
        <>
            <Head>
                <title>Nutriplate</title>
                <meta name='description' content='Resep Opor Tekur' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navbar />
            <RecipePage recipeId={recipeId} />
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query;
    return {
        props: {
            recipeId: slug
        }
    }
}

export default Home