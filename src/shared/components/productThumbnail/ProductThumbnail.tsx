import { useNavigation } from '@react-navigation/native';
import { convertNumberToMoney } from '../../functions/money';
import { theme } from '../../themes/themes';
import { ProductType } from '../../types/productType';
import Button from '../button/Button';
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

interface ProductThumbnailProps {
  product: ProductType;
  margin?: string;
}

export const ProductThumbnail = ({ product, margin }: ProductThumbnailProps) => {
  const { navigate } = useNavigation<ProductNavigationProp>();

  const handleGoToProduct = (product: ProductType) => {
    navigate(MenuUrl.PRODUCT, { product });
  };

  return (
    <ProductThumbnailContainer margin={margin} onPress={() => handleGoToProduct(product)}>
      <ProductImage source={{ uri: `data:image/jpg;base64,${product.image}` }} />
      <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{product.name}</Text>
      <Text color={theme.colors.mainTheme.error} type={textTypes.PARAGRAPH_SEMI_BOLD}>
        {convertNumberToMoney(product.price)}
      </Text>
      <ProductInsertCart>
        <Icons name="cart" color={theme.colors.neutralTheme.white} />
      </ProductInsertCart>
    </ProductThumbnailContainer>
  );
};

export default ProductThumbnail;
