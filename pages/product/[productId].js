/* eslint-disable react-hooks/rules-of-hooks */
/*
dynamic route crated by adding [] and path parameter
is mapped to the the product id */
import { useRouter } from "next/router";


export default function product(){
    const router = useRouter();
    const productId = router.query.productId;
    return <h1>{productId}</h1>;

}