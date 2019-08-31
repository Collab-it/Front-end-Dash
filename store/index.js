import {database} from '~/plugins/firebase'
import axios from 'axios';
 


export const state = () => ({
  drawer: true,
  content : "hi"
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  },
  setcntent(state,data){
    state.content = data
  },
  savecontent(state,data){
    state.content = data
    
    database.ref("text").child("newdoc").update({ content:state.content })
  },

  postdata(state,data){
    axios.post(
      "https://674ce112.ngrok.io/",
      {
        age: data.age,
        family_history: data.family_history,
        leave: data.leave,
        work_interfere:data.work_interfere,
        benefits:data.benefits,
        anonymity: data.anonymity,
        phys_health_consequence: data.phys_health_consequence,
        mental_health_interview: data.mental_health_interview,
        obs_consequence: data.obs_consequence,
        phone:data.phone,
        remote_work:data.remote_work
      }
      
    ).then(function(res){
      console.log(res)
    })
  }
}

export const actions ={



  async getcontent({commit}){
    const dbref = database.ref("text").child("newdoc")
    await dbref.on("value", function (snapshot) {
      const data = snapshot.val()
      //this.datai = data;
      //this.getdata(data);
      console.log(data)
      commit("setcntent",data.content)

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
}