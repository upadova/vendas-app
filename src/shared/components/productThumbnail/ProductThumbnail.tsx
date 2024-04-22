import { useNavigation } from '@react-navigation/native';
import { convertNumberToMoney } from '../../functions/money';
import { theme } from '../../themes/themes';
import { ProductType } from '../../types/productType';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import {
  ProductImage,
  ProductInsertCart,
  ProductThumbnailContainer,
} from './productThumbnail.style';
import { MenuUrl } from '../../../enums/menuUrl';
import { ProductNavigationProp } from '../../../modules/product/screens/Product';
import { Icons } from '../../icon/icon';
import { useRequest } from '../../hooks/useRequest';
import { CART_URL } from '../../constants/urls';
import { MethodEnum } from '../../../enums/methods.enums';
import { ActivityIndicator } from 'react-native';
import { CartRequest } from '../../types/cartRequestType';

interface ProductThumbnailProps {
  product: ProductType;
  margin?: string;
}

const AMOUNT_DEFAULT = 1;

export const ProductThumbnail = ({ product, margin }: ProductThumbnailProps) => {
  const { navigate } = useNavigation<ProductNavigationProp>();
  const { request, loading } = useRequest();
  const handleGoToProduct = (product: ProductType) => {
    navigate(MenuUrl.PRODUCT, { product });
  };

  const handleInsertInCart = () => {
    request<unknown, CartRequest>({
      url: CART_URL,
      method: MethodEnum.POST,
      body: {
        productId: product.id,
        amount: AMOUNT_DEFAULT,
      },
      message: `${product.name} inserido no carrinho.`
    });
  };

  return (
    <ProductThumbnailContainer margin={margin} onPress={() => handleGoToProduct(product)}>
      <ProductImage source={{ uri: `data:image/jpg;base64,${product.image}` }} />
      <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{product.name}</Text>
      <Text color={theme.colors.mainTheme.error} type={textTypes.PARAGRAPH_SEMI_BOLD}>
        {convertNumberToMoney(product.price)}
      </Text>
      <ProductInsertCart onPress={handleInsertInCart}>
        {loading ? (
          <ActivityIndicator color={theme.colors.neutralTheme.white} />
        ) : (
          <Icons name="cart" color={theme.colors.neutralTheme.white} />
        )}
      </ProductInsertCart>
    </ProductThumbnailContainer>
  );
};

export default ProductThumbnail;
