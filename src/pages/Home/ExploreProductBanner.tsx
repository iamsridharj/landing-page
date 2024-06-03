import { HeaderTwo } from "@botbrews/typography";

function ExploreProductBanner() {
    return (
        <div style={{
            background: "#f1e1fd",
            backgroundImage: `url("/images/explore-products.png")`,
            backgroundPosition: "right",
            backgroundSize: "10%",
            backgroundRepeat: "no-repeat",
            padding: "50px",
            textAlign: "center"
        }}>
            <HeaderTwo>Dive into AI Creations: Explore Our Unique Content Now!</HeaderTwo>
        </div>
    );
}

export default ExploreProductBanner;
