import Programs from './Programs'
import { connect } from 'react-redux'
import { $fetchPrograms } from 'reducers/programs'
import { $fetchTags } from 'reducers/tags'

const mapStateToProps = state => ({
  programs: state.programs.list,
  tags: state.tags.list
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch($fetchPrograms())
    dispatch($fetchTags())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Programs)
