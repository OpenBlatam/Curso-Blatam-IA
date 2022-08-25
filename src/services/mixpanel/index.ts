import mixpanel from "mixpanel-browser";

//If there is no token in the env variables, the TEST_TOKEN will initialize Mixpanel
//It does not throw error just that nothing will be logged.
//This is to make Mixpanel as optional dependency
const KEY = process.env.NEXT_PUBLIC_MIXPANEL || "TEST_TOKEN";

mixpanel.init(KEY);

const mp = mixpanel;
export default mp;
