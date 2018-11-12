import React from 'react'
import { widjets } from 'components'
import StaticMode from './StaticMode'
import SearchMode from './SearchMode'

class Toolbar extends React.Component {

  render() {
    return (
      <widjets.ViewsSwitcher
        views={[
          { key: 'static', content: <StaticMode /> },
          { key: 'search', content: <SearchMode /> }
        ]}
      />
    )
  }
}

export default Toolbar
