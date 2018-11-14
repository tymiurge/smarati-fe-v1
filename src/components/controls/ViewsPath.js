import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const propTypes = {
  views: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    onItemClick: PropTypes.func
  }))
}

const ViewsPath = props => (
  <Breadcrumb>
    {
      props.views.reduce(
        (acc, curr, idx, arr) => {
          const last = idx === arr.length - 1
          let itemProps = {
            key: `section_${idx}`,
            active: last,
            link: !last
          }
          if (!last) {
            itemProps = {...itemProps, onClick: () => props.onItemClick(curr)}
          }
          return [
            ...acc,
            (
              <Breadcrumb.Section 
                {...itemProps}
              >
                { curr.title }
              </Breadcrumb.Section>
            ), 
            idx === arr.length - 1 ? null : (<Breadcrumb.Divider key={`divider_${idx}`} />)
          ]
        },
        []
      )
    }
  </Breadcrumb>
)

ViewsPath.propTypes = propTypes

export default ViewsPath
