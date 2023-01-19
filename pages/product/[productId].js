/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";


export default function product(){
    const router = useRouter();
    const productId = router.query.productId;
    return <h1>{productId}</h1>;

}