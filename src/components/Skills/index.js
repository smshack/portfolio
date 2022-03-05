import SliderComponent from "./SliderComponent";

const Skill = ({ height }) => {

    const reactInfo = [
        {
            title: "react",
            imgUrl: "./asset/react/react.svg",
            docUrl:"https://ko.reactjs.org/docs/getting-started.html"
        },
        {
            title: "react-router-dom",
            imgUrl: "./asset/react/react-router-dom.png",
            docUrl:"https://v5.reactrouter.com/web/guides/quick-start"
        },
        {
            title: "react-hook-form",
            imgUrl: "./asset/react/react-hook-form.png",
            docUrl: "https://react-hook-form.com/api/"
        },
        {
            title: "ag-grid-react",
            imgUrl: "./asset/react/ag-grid.svg",
            docUrl: "https://www.ag-grid.com/react-data-grid/"
        },
        {
            title: "videojs",
            imgUrl: "./asset/react/videojs.png",
            docUrl: "https://docs.videojs.com/tutorial-react.html"

        },
        {
            title: "react-helmet",
            imgUrl: "./asset/react/react-helmet.png",
            docUrl: "https://docs.videojs.com/tutorial-react.html"
        },
        {
            title: "react-quill",
            imgUrl: "./asset/react/quill.png",
            docUrl: "https://github.com/zenoamaro/react-quill"
        },
        {
            title: "chart.js",
            imgUrl: "./asset/react/chartjs.png",
            docUrl: "https://www.chartjs.org/docs/latest/"
        },
    ]
    const nodeInfo =[
        {
            title: "node",
            imgUrl: "./asset/node/nodejs.svg",
            docUrl:"https://nodejs.org/ko/docs/"
        },
        {
            title: "npm",
            imgUrl: "./asset/node/npm.png",
            docUrl:"https://www.npmjs.com/"
        },
        {
            title: "mongoose",
            imgUrl: "./asset/node/mongoose.png",
            docUrl:"https://mongoosejs.com/docs/"
        },
        {
            title: "express",
            imgUrl: "./asset/node/express.png",
            docUrl:"https://expressjs.com/ko/"
        },
        {
            title: "cors",
            imgUrl: "./asset/node/cors.png",
            docUrl:"https://expressjs.com/en/resources/middleware/cors.html"
        },
        {
            title: "morgan",
            imgUrl: "./asset/node/morgan.png",
            docUrl:"http://expressjs.com/en/resources/middleware/morgan.html"
        }, 
        {
            title: "multer",
            imgUrl: "./asset/node/multer.jpg",
            docUrl:"http://expressjs.com/en/resources/middleware/multer.html"
        },
        {
            title: "morgan",
            imgUrl: "./asset/node/morgan.png",
            docUrl:"http://expressjs.com/en/resources/middleware/morgan.html"
        },
    ]
    const serverInfo =[
        {
            title: "CentOS",
            imgUrl: "./asset/node/nodejs.svg",
            docUrl:"https://nodejs.org/ko/docs/"
        },
        {
            title: "ubuntu",
            imgUrl: "./asset/node/nodejs.svg",
            docUrl:"https://nodejs.org/ko/docs/"
        },
    ]
    return (
        <div className='skills' style={{ height: height }}>
               <div className='title'>
            <h1>
                SKILLS
            </h1>
            </div>
            <h2>
                REACT
            </h2>
            <SliderComponent value={reactInfo}/>
            <h2>
                NODE
            </h2>
            <SliderComponent value={nodeInfo}/>
            <h2>
                LINUX
            </h2>
            <SliderComponent value={serverInfo}/>
        </div>
        
    );
};

export default Skill;