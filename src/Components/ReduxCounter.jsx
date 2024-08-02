import { useDispatch,useSelector } from "react-redux";
import {incCount , decCount} from '../actions/index'


const ReduxCounter = () => {

    const count = useSelector((store) => store.incDecReducer);
    const dispatch = useDispatch();

    return(

        <>
        <div className="h-screen bg-black"> 
        <div className="container content-center items-center flex justify-center m-11 flex-col  h-96 w-auto  shadow-xl shadow-green-400/50 bg-black">

            <h1  className="text-lime-400 font-bold font-mono text-3xl m-2">Redux Counter App</h1>
        <button className="bg-lime-300 rounded-lg text-white-500 font-bold shadow-md p-2 m-2" onClick={()=> dispatch(incCount())}>Increment +</button>
        <h3 className=" text-white font-extrabold text-xl">Value of Count is : {count}</h3>
        <button className="bg-lime-300 rounded-lg text-white-500 font-bold shadow-md p-2 m-2" onClick={()=> dispatch(decCount())}>Decrement -</button>

        </div>
        
        </div>
    
        </>
    );
}

export default ReduxCounter;