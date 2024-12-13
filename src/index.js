import { appImage, webImage, softwareImage, portfolioImage } from "./images"


const cardContent = {
    web_dev: {
        image: webImage,
        title: "Web Development",
        body: "Creating responsive, user-friendly websites that bring your brand to life online."
    },
    app_dev: {
        image: appImage,
        title: "Mobile Development",
        body: "Designing and building mobile applications to help you reach your customers on the go.."
    },
    software_dev: {
        image: softwareImage,
        title: "Software Development",
        body: "Developing custom software solutions to streamline your business operations and improve efficiency."
    },
    portfolio_dev: {
        image: portfolioImage,
        title: "Portfolio Development",
        body: "Helping professionals showcase their work through beautifully crafted, personalized portfolio websites."
    }
}

export { cardContent }