import { TouchableOpacity, View } from 'react-native';
import Text from '../../../shared/components/text/Text';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { useEffect } from 'react';
import { useRequest } from '../../../shared/hooks/useRequest';
import { PRODUCT_URL } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enums';
import { ProductType } from '../../../shared/types/productType';
import { useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../../enums/menuUrl';
import { ProductNavigationProp } from '../../product/screens/Product';

const Home = () => {
  const { request } = useRequest();
  const { products, setProducts } = useProductReducer();
  const { navigate } = useNavigation<ProductNavigationProp>();
  useEffect(() => {
    request<ProductType[]>({
      url: PRODUCT_URL,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
  }, []);

  const handleGoToProduct = (product: ProductType) => {
    navigate(MenuUrl.PRODUCT, { product });
  };

  return (
    <View>
      <Text>Home</Text>
      {products.map((product) => (
        <TouchableOpacity onPress={() => handleGoToProduct(product)}>
          <Text>{product.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;
