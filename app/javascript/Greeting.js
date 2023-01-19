import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import getGreetings from "./api";


const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  const greet = useSelector((state) => state.greeting);
  return (
    <div>
      <h1>Hey, {greet.name}</h1>
    </div>
  );
}

export default Greeting;
