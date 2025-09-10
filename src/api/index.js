import axios from "axios";
const url = "http://localhost:5000/eventposts";
export const fetchEventPosts = () => axios.get(url);
