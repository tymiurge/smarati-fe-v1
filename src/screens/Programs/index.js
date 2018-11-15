import Programs from './Programs'
import { connect } from 'react-redux'
import { $fetchPrograms, $fetchTags, $fetchBoxes, $addProgram } from 'reducers/programs'

const mapStateToProps = state => ({
  programs: state.programs.list,
  tags: state.programs.tags,
  boxes: state.programs.boxes
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch($fetchPrograms())
    dispatch($fetchTags())
    dispatch($fetchBoxes())
  },
  onProgramAdd: data => dispatch($addProgram(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Programs)
