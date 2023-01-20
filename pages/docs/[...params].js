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
    const {params=[]} = router.query
    if(params.length==2)
    console.log(`features =${params[0]} and concepts = ${params[1]}`)
    else if(params.length==1)
    return <h1>feature {params[1]}</h1>;
}