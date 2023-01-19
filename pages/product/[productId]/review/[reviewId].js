import { useRouter } from "next/router";


export default function Review(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const {productId,reviewId} = router.query;
    return <h1>review id  = {reviewId} and product = {productId}</h1>;

}