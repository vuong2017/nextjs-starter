
import DashBoard from '../../src/containers/admin-manager/DashBoard'
import { fetchDataHome } from '../../src/actions/home'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, {fetchDataHome})(DashBoard)