import React, { Component, Fragment } from 'react'

export default class ButtonGroupOptions extends Component {

	componentDidUpdate() {
		const { ActiveComponent } = this.props
		
		if (ActiveComponent.group != undefined) {
			let componentGroup = ActiveComponent.group.toLowerCase()
			let componentName = ActiveComponent.name.toLowerCase()

			let pageURL = "/library/" + componentGroup + "/" + componentName
			
			window.history.pushState("", "", pageURL)
		}
	}

	showOptions (event) {
		var elems = document.querySelectorAll(".dropdown-menu");

		[].forEach.call(elems, function(el) {
		    el.classList.remove("show")
		})

		event.target.offsetParent.lastChild.classList.add("show")
	}

	hideOptions (event) {
		let parent = event.target.offsetParent

		if (parent != null) {
			event.target.offsetParent.classList.remove("show")
		}
	}

	toggleOptions (event) {
		event.target.parentNode.classList.remove("show")
	}

	buttonGroupOptions (event) {
		const { dispatch } = this.props
		return this.props.buttonGroupOptions.map((buttonGroupOptions, index) => {
			return (
				<a
   				key={index}
   				buttonGroupOptions={buttonGroupOptions.options}
	      	className="dropdown-item"
	      	onMouseUp={this.toggleOptions.bind(this)}
	      	onClick={!this.props.handlebuttonGroupOptionClick ? null  : (event) => this.props.handlebuttonGroupOptionClick(event)} >
	      	{buttonGroupOptions.name}
	      </a>
			)
		})
	}

  render() {
  	const { ActiveComponent, dispatch } = this.props

  	let currentURL = window.location.href
  	let active = currentURL.search(ActiveComponent.group)

  	console.log(active)

    return (
    	<div className="btn-group" role="group">
    		{!this.props.buttonGroupOptions ?
    			<button
		    		type="button"
		    		className={this.props.buttonGroup.name.toLowerCase() == ActiveComponent.group
		    							? 'btn btn-default active'
		    							: 'btn btn-default'}
		    		key={this.props.buttonGroup.group}
		    		onClick={!this.props.handlebuttonGroupOptionClick ? null  : (event) => this.props.handlebuttonGroupOptionClick(event)} >
		    		{this.props.buttonGroup.name}
		    	</button>
	    	: <Fragment>
		    		<button
			    		type="button"
			    		className={this.props.buttonGroup.name.toLowerCase() == ActiveComponent.group
			    							? 'btn btn-default dropdown-toggle active'
			    							: 'btn btn-default dropdown-toggle'}
			    		onMouseOver={this.showOptions.bind(this)}
			    		key={this.props.buttonGroup.group} >
			    		{this.props.buttonGroup.name}
			    	</button>

	      		<div
	      			id={this.props.buttonGroup.name.toLowerCase()}
	      			className="dropdown-menu"
	      			onMouseLeave={this.hideOptions.bind(this)} >
	      			{this.buttonGroupOptions()}
      		</div>
      		</Fragment>}
	    </div>
    )
  }
}