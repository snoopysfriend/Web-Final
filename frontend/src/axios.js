import axios from 'axios' 
axios.defaults.withCredentials=true;


const instance = axios.create({ baseURL: 'http://127.0.0.1:4000' });
axios.defaults.withCredentials=true
export const getDefaultData = async () => { 
    const { data : msg } = await instance.get('/api/syllabus'); 
    console.log('axios', msg);
    return msg;
}

export const getCourseInform = async (courseId) => { 
    // console.log("getCourseInform")
    const res = await axios.get(`http://127.0.0.1:4000/api/courseInform?year=109&courseId=${courseId}`)
      .then((response) => {
        //   console.log(response)
          return response
      })
      .catch(err => {console.log(err)})
    
    return res.data.content;
}

export const getUserCourse = async (id) => { 
    // console.log("getUserCourse")
    // return await axios.get('http://127.0.0.1:4000/api/schedule')

    const res = await axios.get('http://localhost:4000/api/schedule/')
      .then((response) => {
        return response
      })
      .catch(err => {
          console.log(err)
      })
    
    
    return res.data.content;
}

export const postUserCourse = async (id) => { 
    // console.log("postUserCourse")
    const postdata = { "courseId": id }
    const res = await axios.post('http://127.0.0.1:4000/api/schedule', postdata)
      .then((response) => {
        //   console.log(response)
        return response
      })
      .catch(err => {console.log(err)})
    return res;
}
export const patchUserCourse = async (id) => { 
    // console.log("postUserCourse")
    const patchdata = { "courseId": id }
    const res = await axios.patch('http://127.0.0.1:4000/api/schedule', patchdata)
      .then((response) => {
        //   console.log(response)
        return response
      })
      .catch(err => {console.log(err)})
    return res;
}


