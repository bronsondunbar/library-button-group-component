
# Button Group Component

Button group component for React

| Prop                         | Values                                |
| :--------------------------- | :------------------------------------ |
| buttonGroupData              | Object                                |
| handlebuttonGroupOptionClick | handlebuttonGroupOptionClick function |

```
constructor(props) {
  super(props)
}

handlebuttonGroupOptionClick (event) {
  event.preventDefault();
  console.log(event.target.innerText + " has been clicked!")
}

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

  return (
    <div className="btn-group" role="group">
      <ButtonGroupComponent
        buttonGroupData={data}
        handlebuttonGroupOptionClick={this.handlebuttonGroupOptionClick.bind(this)} />
    </div>
  )
}
```