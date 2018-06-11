import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './style.css';

const ButtonGroupComponent = ({ buttonGroupData, showButtonGroupOptions, hideButtonGroupOptions }) => {
  return (
    <Fragment>
        {buttonGroupData.map((data, index) => {
          return (
            <div className="btn-group" role="group">
              {data.items != undefined
                ? <a
                    key={index}
                    className="btn btn-default dropdown-toggle"
                    onMouseEnter={(event) => showButtonGroupOptions(event)}
                    href="#">
                    {data.name}
                  </a>
                : <Link
                    key={index}
                    className="btn btn-default"
                    onMouseEnter={(event) => showButtonGroupOptions(event)}
                    to={data.route}>
                    {data.name}
                  </Link>
              }
              <div
                className="dropdown-menu"
                onMouseLeave={(event) => hideButtonGroupOptions(event)}>
                {data.items != undefined
                  ? data.items.map((data, index) => {
                      return (
                        <Link
                          to={data.route}
                          key={index}
                          className="dropdown-item">
                          {data.name}
                        </Link>
                      )
                    })
                  : null}
              </div>
            </div>
          )
        })}
    </Fragment>
  )
}

export default ButtonGroupComponent