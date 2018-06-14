import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './style.css';

const ButtonGroupComponent = ({ buttonGroupData, buttonGroupTheme, showButtonGroupOptions, hideButtonGroupOptions }) => {

  let buttonGroupClass = classNames({
    'btn-group': true,
    'dropdown-bg-light': buttonGroupTheme == 'light' || buttonGroupTheme == null,
    'dropdown-bg-dark': buttonGroupTheme == 'dark'
  })

  return (
    <Fragment>
        {buttonGroupData.map((data, index) => {
          return (
            <div className={buttonGroupClass} role="group">
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