
# Button Group Component

Button group component for React

Install and save component as a dependency

```

npm install --save library-button-group-component

```

Import component into your app

```

import ButtonGroup from 'library-button-group-component'

```

Create an array of objects with the keys being name and options

```

const buttonGroupData = [
  {
    name: "Item 1",
    route: "/",
    items: [
      {
        name: "Sub item 1",
        route: "/"
      }
    ]
  },
  {
    name: "Item 2",
    route: "/blah"
  },
  {
    name: "Item 3",
    route: "/",
    items: [
      {
        name: "Sub item 3",
        route: "/"
      }
    ]
  },
]

```

Create the function that will show the options

```

showButtonGroupOptions (event) {
  var elems = document.querySelectorAll(".dropdown-menu");

  [].forEach.call(elems, function(el) {
      el.classList.remove("show")
  })

  let hasOptions = event.target.nextSibling.childNodes.length

  if (hasOptions > 0) {
    event.target.nextSibling.classList.add("show")
  }
}


```

Create the function that will hide the options

```

hideButtonGroupOptions (event) {
  let findElement = event.target.className

  if (findElement == 'dropdown-menu show') {
    event.target.classList.remove("show")
  } else if (findElement == 'dropdown-item') {
    event.target.parentElement.classList.remove("show")
  }
}

```


Render the component with the object array we created as well as any other props that are needed

```

render () {
  const buttonGroupData = [
    {
      name: "Item 1",
      route: "/",
      items: [
        {
          name: "Sub item 1",
          route: "/"
        }
      ]
    },
    {
      name: "Item 2",
      route: "/blah"
    },
    {
      name: "Item 3",
      route: "/",
      items: [
        {
          name: "Sub item 3",
          route: "/"
        }
      ]
    },
  ]

  return (
    <div className="btn-group" role="group">
      <ButtonGroupComponent
        buttonGroupData={buttonGroupData}
        buttonGroupTheme="dark"
        showButtonGroupOptions={this.showButtonGroupOptions.bind(this)} 
        hideButtonGroupOptions={this.hideButtonGroupOptions.bind(this)} />
    </div>
  )
}

```

| Prop                   | Values                          |
| :--------------------- | :------------------------------ |
| buttonGroupData        | Object                          |
| buttonGroupTheme       | dark or light                   |
| showButtonGroupOptions | showButtonGroupOptions function |
| hideButtonGroupOptions | hideButtonGroupOptions function |