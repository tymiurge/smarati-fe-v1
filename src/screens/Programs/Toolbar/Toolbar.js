import React from 'react'
import { widjets } from 'components'
import StaticMode from './StaticMode'
import SearchMode from './SearchMode'
import WizardMode from './WizardMode'

class Toolbar extends React.Component {

  render() {
    return (
      <widjets.ViewsSwitcher
        views={[
          { key: 'static', content: <StaticMode /> },
          { key: 'search', content: <SearchMode /> },
          { key: 'wizard', content: <WizardMode {...this.props} />}
        ]}
      />
    )
  }
}

export default Toolbar
