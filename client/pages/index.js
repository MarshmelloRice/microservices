import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
    // axios.get('/api/users/currentuser').catch((err) => {
        // console.log(err.message);
    // })
    return currentUser ? <h1>You are Signed In</h1>: <h1>You are NOT Signed In</h1>;
};

// server side rendering service
LandingPage.getInitialProps = async(context) => {
    const { data } = await buildClient(context).get('/api/users/currentuser');
    return data
};

export default LandingPage;