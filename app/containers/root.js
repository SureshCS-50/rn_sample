import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Root from './../components/root'

import * as rootActions from './../reducers/root/actions'
const keys = require('./../utils/constants').keys;

function mapStateToProps(state){
    return{
        count : state.root.get(keys.count)
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({...rootActions}, dispatch)
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Root);