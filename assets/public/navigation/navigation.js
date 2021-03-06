import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductsScreen from '../../screens/ProductsList';
import ProductsSearch from '../../screens/ProductsSearch';
import ProductDetail from '../../screens/ProductDetail';
import ProductsEdit from '../../screens/ProductEdit';
import ProductsAdd from '../../screens/ProductAdd';
import CategoriesScreen from '../../screens/CategoriesList';
import CategoryAdd from '../../screens/CategoryAdd';
import CategoryEdit from '../../screens/CategoryEdit';

const href = createStackNavigator(
	{
        ProductsScreen,
        ProductsSearch,
		ProductDetail,
        ProductsEdit,
        ProductsAdd,
        CategoriesScreen,
        CategoryAdd,
        CategoryEdit
    },
    {
        headerMode: 'none'
    },
	initialRootName = ProductsScreen,
)

export default createAppContainer(href);