const dev = {
    API_URL: "https://clientonbelb.styx.threadresearch.com",
};
  
const prod = {
    API_URL: "https://clientonbelb.styx.threadresearch.com"
};
  
const config = {    
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};
  
export default config;