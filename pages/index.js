import Link from "next/link";
import { useRouter } from "next/router";
/*

routing programatically using router.push

*/
export default function Home(){
    const router = useRouter()
    const  handleClick=()=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        
      //  router.push('/product')

      router.replace('/product')
        
    }
return (
<div>
<h1>Home Page</h1>

<Link href ="/docs">
Blog
</Link>
<Link href ="/product">
products
</Link>
<button onClick={handleClick}>Open</button>


</div>



);



}