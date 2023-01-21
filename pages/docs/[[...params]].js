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

a single square braket resutes a 404 while no 
sub dirs that is why double brakets 



*/
export default function  Docs(){
    const router = useRouter()

    return <h1>docs</h1>;

    const {params=[]} = router.query
    if(params.length==2)
    console.log(`features =${params[0]} and concepts = ${params[1]}`)
    else if(params.length==1)
    return <h1>feature {params[1]}</h1>;

}