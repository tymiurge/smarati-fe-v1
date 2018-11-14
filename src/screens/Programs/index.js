import Programs from './Programs'
import { connect } from 'react-redux'
import { $fetchPrograms } from 'reducers/programs'

const mapStateToProps = state => ({
  programs: state.programs.list
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch($fetchPrograms())
})

export default connect(mapStateToProps, mapDispatchToProps)(Programs)
