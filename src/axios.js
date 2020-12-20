import axios from "axios";
const instance=axios.create({
    //"https://api.themoviedb.org/3/movie/157336"
    baseURL:"https://api.themoviedb.org/3",
});
instance.get('/foo-bar');
 
export default instance;
