import * as React from 'react'
import { ListItem } from './types'

interface ListProps {
  items: ReadonlyArray<ListItem>
}

const List : React.StatelessComponent<ListProps> = props =>
    <div>
      <ul>
        {
          props.items.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div>

export default List    