import { View } from 'react-native';
import Text from '../../../shared/components/text/Text';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { useEffect } from 'react';
import { useRequest } from '../../../shared/hooks/useRequest';
import { PRODUCT_URL } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enums';
import { ProductType } from '../../../shared/types/productType';

const Home = () => {
  const { request, loading } = useRequest();
  const { products, setProducts } = useProductReducer();
  useEffect(() => {
    request<ProductType[]>({
      url: PRODUCT_URL,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
  }, []);

  return (
    <View>
      <Text>Home</Text>
      {products.map((product) => (
        <Text>{product.name}</Text>
      ))}
    </View>
  );
};

export default Home;
