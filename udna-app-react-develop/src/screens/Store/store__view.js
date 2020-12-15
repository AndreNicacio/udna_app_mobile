import propTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import Container from '../../layouts/Container';

import StoreItem from './components/StoreItem';
import styles from './styles';

const StoreView = ({
  headerTitle,
  loading,
  categories,
  onChoiceItem,
  onSeeShopping,
}) => (
  <Container
    headerTitle={headerTitle}
    loading={loading}
    headerTextButton="Meus pedidos"
    onPressRight={onSeeShopping}
  >
    <View style={styles.container}>
      {categories.map((category) => (
        <View key={category.id} style={styles.categoryView}>
          <Text style={styles.title}>{category.name}</Text>
          {category.exams.length > 0 ? (
            <>
              {category.exams.map((exam) => (
                <StoreItem
                  key={exam.id}
                  elt={exam}
                  onPress={onChoiceItem}
                />
              ))}
            </>
          ) : <Text style={styles.textEmpty}>Em breve um novo produto aqui!</Text>}
        </View>
      ))}
    </View>
  </Container>
);

StoreView.propTypes = {
  headerTitle: propTypes.string.isRequired,
  loading: propTypes.bool,
  categories: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    exams: propTypes.arrayOf(propTypes.shape({
      id: propTypes.string,
      categoryId: propTypes.string,
      title: propTypes.string,
      description: propTypes.string,
      price: propTypes.string,
      icon: propTypes.node,
    }).isRequired),
  }).isRequired).isRequired,
  onChoiceItem: propTypes.func.isRequired,
  onSeeShopping: propTypes.func.isRequired,
};

StoreView.defaultProps = {
  loading: false,
};

export default StoreView;
