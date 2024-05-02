import { FlatList, View } from 'react-native';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { useEffect } from 'react';
import { useRequest } from '../../../shared/hooks/useRequest';
import { PRODUCT_URL } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enums';
import { ProductType } from '../../../shared/types/productType';
import { useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../../enums/menuUrl';
import { ProductNavigationProp } from '../../product/screens/Product';
import ProductThumbnail from '../../../shared/components/productThumbnail/ProductThumbnail';
import Input from '../../../shared/components/input/Input';
import { Icons } from '../../../shared/icon/icon';
import { HomeContainer } from '../styles/home.styles';

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
      <HomeContainer>
        <Input iconRight='search'/>
      </HomeContainer>
      <FlatList
        horizontal
        data={products}
        renderItem={({ item }) => <ProductThumbnail margin="0px 8px" product={item} />}
      />
    </View>
  );
};

export default Home;
