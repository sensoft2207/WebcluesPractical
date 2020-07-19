import React, { Component } from 'react';
import {
    View,
    FlatList,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import {
    StyleHomeScreen,
    StylePostFlatItem
} from '../styles';
import { ToolBarHomeScreen, PostFlatItem } from '../components';
import Modal from 'react-native-modal';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemPostList: [],
            itemPostListFiltered: [],
            isFilter: 'All',
            isFilterCheckedAll: true,
            isFilterCheckedFood: false,
            isFilterCheckedDrinks: false,
            isChangeView: false,
            numColumnsChange: '0',
            isFilterModalVisible: false
        };
    }

    componentDidMount() {

        this._setDataToPostList()

    }

    _setDataToPostList() {

        this.setState({
            itemPostList: [
                {
                    id: '1',
                    postTitle: 'Chinese',
                    postCategory: 'Food'
                },
                {
                    id: '2',
                    postTitle: 'Panner',
                    postCategory: 'Food'
                },
                {
                    id: '3',
                    postTitle: 'Coke',
                    postCategory: 'Drinks'
                },
                {
                    id: '4',
                    postTitle: 'Pepsi',
                    postCategory: 'Drinks'
                },
                {
                    id: '5',
                    postTitle: 'Cold Cofee',
                    postCategory: 'Drinks'
                }
            ],
        });

        setTimeout(() => {
            this.setState({
                itemPostListFiltered: this.state.itemPostList
            })
        }, 500);

    }

    _changeFlatListView() {

        const { isChangeView } = this.state

        if (isChangeView) {

            this.setState({
                isChangeView: false,
                numColumnsChange: '0'
            })

        } else {

            this.setState({
                isChangeView: true,
                numColumnsChange: '2'
            })

        }

    }

    _toggleModalOpenClose = () => {

        this.setState({ isFilterModalVisible: !this.state.isFilterModalVisible });

    };

    _filterPostMainCheckbox(isFrom) {

        if (isFrom == 'All') {

            this.setState({
                isFilterCheckedAll: !this.state.isFilterCheckedAll,
                isFilterCheckedFood: false,
                isFilterCheckedDrinks: false,
                isFilter: 'All'
            })

        } else if (isFrom == 'Food') {

            this.setState({
                isFilterCheckedFood: !this.state.isFilterCheckedFood,
                isFilterCheckedAll: false,
                isFilterCheckedDrinks: false,
                isFilter: 'Food'
            })

        } else if (isFrom == 'Drinks') {

            this.setState({
                isFilterCheckedDrinks: !this.state.isFilterCheckedDrinks,
                isFilterCheckedAll: false,
                isFilterCheckedFood: false,
                isFilter: 'Drinks'
            })

        }

    }

    _filterPostSubmit() {

        const { isFilter, itemPostList, itemPostListFiltered } = this.state

        if (isFilter == 'All') {

            this.setState({
                itemPostListFiltered: itemPostList
            })

        } else if (isFilter == 'Food') {

            const filtredList = itemPostList.filter(
                item =>
                    item.postCategory === 'Food'
            );

            this.setState({
                itemPostListFiltered: filtredList
            })

        } else if (isFilter == 'Drinks') {

            const filtredList = itemPostList.filter(
                item =>
                    item.postCategory === 'Drinks'
            );

            this.setState({
                itemPostListFiltered: filtredList
            })

        }

        this._toggleModalOpenClose()

    }

    render() {

        const { itemPostList, isChangeView, numColumnsChange, isFilterCheckedAll,
            isFilterCheckedFood, isFilterCheckedDrinks, itemPostListFiltered } = this.state

        return (

            <View style={StyleHomeScreen.mainContainer}>

                <ToolBarHomeScreen
                    titleName={'Home'}
                    onFilterBtnPress={() => this._toggleModalOpenClose()}
                    onChangeBtnPress={() => this._changeFlatListView()}
                />

                <View style={StyleHomeScreen.listContainer}>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={itemPostListFiltered}
                            numColumns={numColumnsChange}
                            key={numColumnsChange}
                            renderItem={({ item }, index) => (
                                <PostFlatItem
                                    postTitle={item.postTitle}
                                    styleChangeView={isChangeView == true ? StylePostFlatItem.itemGridViewStyle : StylePostFlatItem.itemListViewStyle}
                                    postCategory={item.postCategory}
                                    isChangeView={isChangeView}
                                />
                            )}
                        />
                    </View>
                </View>

                <Modal isVisible={this.state.isFilterModalVisible}>
                    <View style={StyleHomeScreen.dialogMainContainer}>
                        <View style={StyleHomeScreen.filterHeaderDialog}>

                            <Text style={StyleHomeScreen.filterHeaderText}>Filter</Text>

                            <View style={StyleHomeScreen.filterImgCloseContainer}>
                                <TouchableOpacity onPress={() => this._toggleModalOpenClose()}>
                                    <Image
                                        style={StyleHomeScreen.filterImgClose}
                                        source={require('../assets/images/ic_close.png')}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={StyleHomeScreen.filterDialogMiddle}>

                            <CheckBox
                                title='All'
                                checked={isFilterCheckedAll}
                                onPress={() => this._filterPostMainCheckbox("All")}
                            />

                            <CheckBox
                                title='Food'
                                checked={isFilterCheckedFood}
                                onPress={() => this._filterPostMainCheckbox("Food")}
                            />

                            <CheckBox
                                title='Drinks'
                                checked={isFilterCheckedDrinks}
                                onPress={() => this._filterPostMainCheckbox("Drinks")}
                            />

                            <TouchableOpacity
                                onPress={() => this._filterPostSubmit()}
                            >
                                <View style={StyleHomeScreen.submitBtn}>
                                    <Text style={StyleHomeScreen.submitText}>Submit</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Modal>


            </View>
        );
    }
}
export { HomeScreen };
