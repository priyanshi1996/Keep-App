let dataArray = {}
let errorCode=1;

export const signup = async function (id,name,password){
   let response = await getData(id);
   console.log("Response",response);
   if(response[1] === 1){
       console.log("No data");
        await fetch('http://localhost:3002/users',{
            method: 'POST',
            body:JSON.stringify({
                "id":id,
                "name":name,
                "password":password,
                "notes":[]
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => {
            console.log('Success:', JSON.stringify(response))
            dataArray = response;
            errorCode = 0;
        })
        .catch(error => console.error('Error:', error))
    }
    else{
        errorCode = 1;
    }
    return [dataArray,errorCode];
}

async function getData(id){
    await fetch('http://localhost:3002/users/'+id)
        .then(function(response){
            console.log(response.getHeaders);
            return Promise.all([response.status,response.json()]);
        })
        .then(function([status,data]){
            dataArray = data;
            console.log("DataArray", dataArray);
            console.log("Status Code", status);
            if(status==200)
                errorCode = 0;
        }).catch(error => {console.error('Error:', error)
            errorCode = 1;
        })
        return [dataArray,errorCode];
}

export async function addNotes(id,todoNotes){
   let response = await getData(id);
   console.log("Response",response);
   let data = response[0];
   let notes = response[0].notes;
   console.log(notes);
   notes = notes.concat(todoNotes);
   await fetch('http://localhost:3002/users/'+id,{
       method : 'PUT',
       body:JSON.stringify({
           "id": data.id,
           "name":data.name,
           "password":data.password,
           "notes":notes
       }),headers:{
        'Content-Type': 'application/json'
    }
   }).then(res => res.json())
   .then(response => {
       console.log('Success:', JSON.stringify(response))
       dataArray = response;
   })
   .catch(error => console.error('Error:', error))
   return dataArray;
}
export async function signin(id,password){
    let response = await getData(id);
    let data = response[0];
    let status = response[1];
    dataArray = data;
    console.log("Entered Id",id);
    console.log("Actual Id",data.id);
    console.log("Entered Password",password);
    console.log("Actual PAssword",data.password);
    if(status == 0){
        if(data.id == id && data.password == password){
            errorCode = 0;
            console.log("Password matched");
        }
            
    }
    
    return [dataArray,errorCode];
}
export async function removeNotes(id,tasks){
    let response = await getData(id);
   console.log("Response",response);
   let data = response[0];
   let notes = tasks;
   console.log(notes);
   await fetch('http://localhost:3002/users/'+id,{
       method : 'PUT',
       body:JSON.stringify({
           "id": data.id,
           "name":data.name,
           "password":data.password,
           "notes":notes
       }),headers:{
        'Content-Type': 'application/json'
    }
   }).then(res => res.json())
   .then(response => {
       console.log('Success:', JSON.stringify(response))
       dataArray = response;
   })
   .catch(error => console.error('Error:', error))
   return dataArray;
}

module.export = {
    signup,addNotes,signin
};

