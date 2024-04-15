import { RouteProp, useRoute } from '@react-navigation/native';
import { ProductType } from '../../../shared/types/productType';
import Text from '../../../shared/components/text/Text';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ProductNavigationProp = NativeStackNavigationProp<Record<string, ProductParams>>;

export interface ProductParams {
  product: ProductType;
}

export const Product = () => {
  const { params } = useRoute<RouteProp<Record<string, ProductParams>>>();
  const { product } = params;
  console.log('params', params);
  return <Text>{product.name}</Text>;
};

export default Product;
