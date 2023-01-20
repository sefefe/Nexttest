//Catch All routes

import { useRouter } from "next/router";

/*
it is used to navigate like documentation sites with 
many nested routs
Feature1
 -concept1
- concept2
- concept3
- concept4
Feature2
 -concept1
- concept2
- concept3
- concept4


*/
export default function  Docs(){
    const router = useRouter()
    return <h1>docs</h1>;
}