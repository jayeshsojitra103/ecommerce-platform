import productsData from '../../../data/products.json';

export const GET=()=>{
    return Response.json({productsData})
}
