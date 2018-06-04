
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

const data = [
  {
    name: 'Item one',
    options: [
      {
        name: 'Sub item 1'
      },
      {
        name: 'Sub item 2'
      },
      {
        name: 'Sub item 3'
      }
    ]
  },
  {
    name: 'Item two',
    options: [
      {
        name: 'Sub item 1'
      },
      {
        name: 'Sub item 2'
      },
      {
        name: 'Sub item 3'
      }
    ]
  },
  {
    name: 'Item three',
    options: [
      {
        name: 'Sub item 1'
      },
      {
        name: 'Sub item 2'
      },
      {
        name: 'Sub item 3'
      }
    ]
  }
]

```

Create the function that will handle mouse click events

```

handleClick(event) {
  handlebuttonGroupOptionClick (event) {
    event.preventDefault();
    console.log(event.target.innerText + " has been clicked!")
  }
}

```

Render the component with the object array we created as well as any other props that are needed

```

render () {
  const data = [
    {
      name: 'Item one',
      options: [
        {
          name: 'Sub item 1'
        },
        {
          name: 'Sub item 2'
        },
        {
          name: 'Sub item 3'
        }
      ]
    },
    {
      name: 'Item two',
      options: [
        {
          name: 'Sub item 1'
        },
        {
          name: 'Sub item 2'
        },
        {
          name: 'Sub item 3'
        }
      ]
    },
    {
      name: 'Item three',
      options: [
        {
          name: 'Sub item 1'
        },
        {
          name: 'Sub item 2'
        },
        {
          name: 'Sub item 3'
        }
      ]
    }
  ]

  render () {
    return (
      <div className="btn-group" role="group">
        <ButtonGroupComponent
          buttonGroupData={data}
          handlebuttonGroupOptionClick={this.handlebuttonGroupOptionClick.bind(this)} />
      </div>
    )
  }
}

```

| Prop                         | Values                                |
| :--------------------------- | :------------------------------------ |
| buttonGroupData              | Object                                |
| handlebuttonGroupOptionClick | handlebuttonGroupOptionClick function |