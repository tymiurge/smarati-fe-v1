import React from 'react'
import PropTypes from 'prop-types'
import SizeResolver from './SizeResolver'
import { container, composeStyles } from 'styles'

class HeightColumn extends React.Component {

  static propTypes = {
    height: PropTypes.number.isRequired,
    header: PropTypes.object,
    footer: PropTypes.object,
    main: PropTypes.object.isRequired
  }
  
  static defaultProps = {
		header: (<div />),
		footer: (<div />)
  }
  
  state = {
		headerHeight: null,
		footerHeight: null
  }
  
  onSizeResolving = (h, componentName) => {
		if ( this.state[`${componentName}Height`] === null) {
      this.setState({
        ...this.state, 
        [`${componentName}Height`]: h}
      ) 
		}
  }
  
  mainHeight = () => {
    const { height } = this.props
    const { headerHeight, footerHeight } = this.state
    return height - headerHeight - footerHeight
  }
    
  render() {
    return(

    <div style={{height: this.props.height}}>
      <SizeResolver onSizeResolving={ size => this.onSizeResolving(size.height, 'header')}>
        { this.props.header }
      </SizeResolver>
      {
        this.state.headerHeight !== null &&
        <div>
          {
            this.state.headerHeight !== null && this.state.footerHeight !== null &&
            <div style={composeStyles({height: this.mainHeight()}, container.yScrollable)}>
              { this.props.main }
            </div>
          }
          <SizeResolver onSizeResolving={ size => this.onSizeResolving(size.height, 'footer')}>
            { this.props.footer }
          </SizeResolver>  
        </div>
      }
    </div>
    )
  }
}

export default HeightColumn