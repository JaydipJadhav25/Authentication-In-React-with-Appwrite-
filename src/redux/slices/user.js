import { createSlice  , createAsyncThunk, isRejected} from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("createUser" , async(data)=>{
  console.log("data coming : " , data)
  const user = await fetch("http://localhost:3000/user" ,{
    method : "POST",
    headers :{
     "Content-Type" : "application/json"
    },
    body : JSON.stringify(data)
  })
    
  try {
      const result = await user.json();
    console.log("result : " , result)
    return result;

  } catch (error) {
    return isRejected(error);
    
  }
})

export const allUser = createAsyncThunk("allUser" , async() =>{
  try {
     
    const users =  await fetch("http://localhost:3000/user")
           
    const result = await users.json();

    // console.log("result : " , result);
    return result;
    
     
  } catch (error) {
    console.log(error);
    
  }
})


export const userSlice = createSlice({
    name : "user",
    initialState :{
        loading: false,
      users :[],
      erro : false,
      status : false,
    },
    extraReducers :(builder) => {
      //all user
      builder.addCase(allUser.pending , (state)=>{
        state.loading = true;
      })
      builder.addCase(allUser.fulfilled , (state , action)=>{
        state.loading = false;
        // console.log(action.payload)
        state.users = action.payload;
      })
      builder.addCase(allUser.rejected , (state)=>{
        state.erro = true;
      })

      //create user

      builder.addCase(createUser.pending , (state , action) =>{
        state.loading = true
        console.log(action.payload)
      })
      builder.addCase(createUser.fulfilled , (state , action) =>{
        state.loading = false;
        console.log(action.payload);
        state.users.push(action.payload);

      })
      builder.addCase(createUser.rejected , (state ) =>{
        state.loading = false;
        state.erro = true
        
      })
      
    


    }

})


export default userSlice.reducer;